import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  currency="RM";

  @ViewChild('slides') slides: IonSlides;

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

  saveAndStart(){
    this.storage.set('seen-intro', true);
    this.storage.set('selected-currency', this.currency);
    this.router.navigateByUrl('/')
  }

}
