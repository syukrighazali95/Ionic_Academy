import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CashService } from 'src/app/services/cash.service';
import { CashFlowModalPage } from '../cash-flow-modal/cash-flow-modal.page';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {

  selectedCurrency = '';
  transaction = [];
  constructor(private modalCtrl: ModalController, private cashService: CashService, private plt: Platform, private storage: Storage) { }

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

  loadTransactions() {
    this.storage.get('selected-currency').then(currency => {
      this.selectedCurrency = currency.toUpperCase();
    });
    this.cashService.getTransactions().then(trans => {
      this.transaction = trans;
      console.log('transaction: ', trans)
    });
  }

}
