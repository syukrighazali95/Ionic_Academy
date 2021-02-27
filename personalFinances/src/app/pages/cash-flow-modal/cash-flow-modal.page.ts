import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cash-flow-modal',
  templateUrl: './cash-flow-modal.page.html',
  styleUrls: ['./cash-flow-modal.page.scss'],
})
export class CashFlowModalPage implements OnInit {

  categories = [
    {name: "Food", icon: "pizza"},
    {name: "Rent", icon: "business"},
    {name: "Shopping", icon: "cart"},
    {name: "Sports", icon: "fitness"},
    {name: "Education", icon: "school"},
    {name: "Travel", icon: "airplane"}

  ]

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  addTransaction() {

  }

  close() {
    this.modalCtrl.dismiss();
  }

}
