import { Component } from '@angular/core';
import { ELocalNotificationTriggerUnit, ILocalNotification, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scheduled = [];

  constructor(private plt: Platform, private localNotification: LocalNotifications, private alertCtrl: AlertController) {
    this.plt.ready().then(() => {
      this.localNotification.on('click').subscribe(res => {
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });

      this.localNotification.on('trigger').subscribe(res => {
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      })
    })
  }

  showAlert(header, sub, msg) {
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ["Ok"]
    }).then(alert => alert.present());
  }

  scheduleNotification() {
    this.localNotification.schedule({
      id: 1,
      title: 'Attention',
      text: 'Simon Notification',
      data: { mydata: 'My hidden message this is'},
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND},
      foreground: true
    })
  }

  recurringNotification() {
    this.localNotification.schedule({
      id: 22,
      title: 'Recurring',
      text: 'Simons Recurring Notification',
      trigger: { every: ELocalNotificationTriggerUnit.MINUTE}
    });
  }

  repeatingDaily() {
    this.localNotification.schedule({
      id: 42,
      title: 'Good Morning',
      text: 'Code something epic today!',
      trigger: { every: {hour: 9, minute: 30}}
    })
  }

  getAll() {
    this.localNotification.getAll().then((res: ILocalNotification[]) => {
      this.scheduled = res;
    })
  }

}
