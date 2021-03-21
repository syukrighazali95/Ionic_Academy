import { Component } from '@angular/core';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import { PopoverPage } from '../pages/popover/popover.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value = 0;

  constructor(private nav: NavController, private modalController: ModalController, private poppverController: PopoverController) {}

  pushPage() {
    this.nav.navigateForward(`/second/${this.value}`);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        custom_id: this.value
      }
    });
    await modal.present();
  }

  async openPopover(ev: Event) {
    const popover = await this.poppverController.create({
      component: PopoverPage,
      event: ev,
      componentProps: {
        custom_id: this.value
      }
    });
    await popover.present();
  }
}
