import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  passedId = null;
  constructor(private navParam: NavParams, private popoverController: PopoverController) { }

  ngOnInit() {
    this.passedId = this.navParam.get("custom_id");
  }

  closePopover() {
    this.popoverController.dismiss();
  }

}
