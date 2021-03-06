import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataService, Gag } from 'src/app/services/data.service';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins


@Component({
  selector: 'app-new-gag',
  templateUrl: './new-gag.page.html',
  styleUrls: ['./new-gag.page.scss'],
})
export class NewGagPage implements OnInit {

  gag: Gag = {
    title: '',
    image: null,
    creator: null
  }

  capturedImage = null;

  constructor(private router: Router, private dataService: DataService, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async addImage() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      source: CameraSource.Photos,
      resultType: CameraResultType.Base64
    });
    console.log('result: ', image)
    this.capturedImage = `data:image/jpeg:base64, ${image.base64String}`;
    this.gag.image = image.base64String;
  }

  async save() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.dataService.addGag(this.gag).subscribe((res) => {
      console.log('after add: ', res);
      loading.dismiss();
      this.router.navigateByUrl('/');
    })
  }

}
