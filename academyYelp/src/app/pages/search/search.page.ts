import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm = "";
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  startSearch() {
    console.log("Search")
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
