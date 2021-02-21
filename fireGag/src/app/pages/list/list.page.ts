import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  gags:any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  signOut() {
    this.dataService.signOut();
  }

  ionViewWillEnter() {
    this.reloadGags();
  }

  reloadGags(event?){
    this.dataService.getGags().subscribe(res => {
      this.gags = res;
      console.log("my_gags: ", res);
      if (event) {
        event.target.complete();
      }
    })
  }

}
