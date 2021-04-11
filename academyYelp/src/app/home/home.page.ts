import { Component } from '@angular/core';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  shortcutButtons = [
    {
      title: 'Restaurants',
      icon: "pizza"
    },
    {
      title: 'Coffee',
      icon: "cafe"
    },
    {
      title: 'Delivery',
      icon: "bicycle"
    },
    {
      title: 'Takeout',
      icon: "beer"
    },
    {
      title: 'Hairdressers',
      icon: "cut"
    },
    {
      title: 'Heating',
      icon: "thermometer"
    },
    
  ]

  constructor() {}

  openSearch() {
    console.log("Open search")
  }
}
