import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = "Check out the Ionic Academy";
  url = "https://ionicacademy.com";

  constructor(private socialSharing: SocialSharing, private file: File) {}

  async shareTwitter(){
    this.socialSharing.shareViaTwitter(null, null, this.url).then(() => {

    }).catch((e) => {

    });
  }

  async shareWhatsapp() {
    this.socialSharing.shareViaWhatsApp(this.text,null,this.url).then(() => {

    }).catch((e) => {

    });
  }

  async resolveLocalFile(){
    return this.file.copyFile(`${this.file.applicationDirectory}www/assets/imgs`, 'person.jpg', this.file.cacheDirectory, `${new Date().getTime()}.jpg`)
  }

  removeTempFile(name) {
    this.file.removeFile(this.file.cacheDirectory, name)
  }

  async shareEmail() {
    let file = await this.resolveLocalFile();
    this.socialSharing.shareViaEmail(this.text, 'My custom subject', ['syukrighazali95@gmail.com'], null, null, file.nativeURL).then(() => {
      this.removeTempFile(file.name);
    }).catch((e) => {

    });
  }

  async shareFacebook(){
    let file = await this.resolveLocalFile();
    this.socialSharing.shareViaFacebook(null, file.nativeURL, null).then(() => {
      this.removeTempFile(file.name);
    }).catch((e) => {

    });
  }

}
