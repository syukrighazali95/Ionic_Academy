import { Component } from '@angular/core';
import { AboutPage } from '../about/about.page';
import { AccountPage } from '../account/account.page';
import { NewsPage } from '../news/news.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsPage = NewsPage;
  accountPage = AccountPage;
  aboutPage = AboutPage;

  constructor() {}

}
