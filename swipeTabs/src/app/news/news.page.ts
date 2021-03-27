import { Component, OnInit } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { IonNav } from '@ionic/angular';
import { NewsDetailsPage } from '../news-details/news-details.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsDetails = NewsDetailsPage;
  constructor(private st: SuperTabs, private nav: IonNav) { }

  ngOnInit() {
  }

  openDetails() {
    this.nav.push(this.newsDetails)
  }

  openAboutTab() {
    this.st.selectTab(2);
  }

}
