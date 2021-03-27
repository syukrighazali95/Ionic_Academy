import { Component, ViewChild } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { AboutPage } from '../about/about.page';
import { AccountPage } from '../account/account.page';
import { NewsPage } from '../news/news.page';
import { SuperTabChangeEventDetail } from '@ionic-super-tabs/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsPage = NewsPage;
  accountPage = AccountPage;
  aboutPage = AboutPage;

  title = "News";
  canGoBack = false;

  @ViewChild('newsNav', {static: false}) newsNav: IonNav;

  constructor() {}

  ngAfterViewInit() {
    this.newsNav.ionNavDidChange.subscribe(async ev => {
      this.canGoBack = await this.newsNav.canGoBack();
      console.log(this.canGoBack);
    })
  }

  onTabChange(ev: CustomEvent<SuperTabChangeEventDetail>){
    switch (ev.detail.index) {
      case 0:
        this.title = "News";
        break;
      case 1:
        this.title = "Account";
        break;
      case 2:
        this.title = "About";
        break;
    }
  }

  goBack() {
    this.newsNav.pop();
  }

}
