import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataService, Gag } from 'src/app/services/data.service';

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

  constructor(private router: Router, private dataService: DataService, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async save() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.dataService.addGag(this.gag).then((res) => {
      console.log('after add: ', res);
      loading.dismiss();
      this.router.navigateByUrl('/');
    })
  }

}
