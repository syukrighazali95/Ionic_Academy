import { Component } from '@angular/core';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private yelpService: YelpService) {}

}
