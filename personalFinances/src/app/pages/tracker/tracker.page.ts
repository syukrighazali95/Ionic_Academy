import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ModalController, Platform, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CashFlow, CashService, Transaction } from 'src/app/services/cash.service';
import { CashFlowModalPage } from '../cash-flow-modal/cash-flow-modal.page';
import { FilterPopoverPage } from '../filter-popover/filter-popover.page';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {

  selectedCurrency = '';
  transaction: Transaction[] = [];
  allTransaction: Transaction[] = [];
  cashFlow = 0;
  
  @ViewChild('slidingList') slidingList: IonList
  
  constructor(private modalCtrl: ModalController, private cashService: CashService, private plt: Platform, private storage: Storage,
    private popoverCtrl: PopoverController) { }

  async ionViewWillEnter() {
    await this.plt.ready();
    this.loadTransactions();
  }

  ngOnInit() {
  }

  async addCashFlow() {
    let modal = await this.modalCtrl.create({
      component: CashFlowModalPage,
      cssClass: "modalCss"
    });
    modal.present()

    modal.onDidDismiss().then(res => {
      if (res && res.data) {
        this.loadTransactions();
      }
    })
  }

  async loadTransactions() {
    await this.storage.get('selected-currency').then(currency => {
      this.selectedCurrency = currency.toUpperCase();
    });
    await this.cashService.getTransactions().then(trans => {
      this.transaction = trans;
      this.allTransaction = trans;
      console.log('transaction: ', trans)
    });
  }

  async removeTransaction(i) {
    this.transaction.splice(i, 1);
    this.cashService.updateTransactions(this.transaction);
    await this.slidingList.closeSlidingItems();
    this.updateCashFlow();
  }

  updateCashFlow() {
    let result = 0;
    this.transaction.map(trans => {
      result = trans.type == CashFlow.Expense ? -trans.value : +trans.value;

    });

    this.cashFlow = result;
  }

  async openFilter(e) {
    const popover = await this.popoverCtrl.create({
      component: FilterPopoverPage,
      event:e
    });

    await popover.present();

    popover.onDidDismiss().then(res => {
      if (res && res.data) {
        let selectedName = res.data.selected.name;

        if (selectedName == "All") {
          this.transaction = this.allTransaction;
        } else {
          this.transaction = this.allTransaction.filter(trans => {
            return trans.category.name == selectedName;
          });
        }
      }
    })
  }

}
