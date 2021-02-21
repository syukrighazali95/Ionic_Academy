import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Gag } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  gags:any = [];
  votes = null;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getVotes().subscribe(res => {
      console.log('votes: ', res);
      this.votes = res;
    });
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

  upvote(gag:Gag){
    if (!this.dataService.currentUser){
      this.router.navigateByUrl('/login');
      return;
    }
    this.dataService.upvote(gag);
  }

  downvote(gag:Gag){
    if (!this.dataService.currentUser){
      this.router.navigateByUrl('/login');
      return;
    }
    this.dataService.downvote(gag);
  }

}
