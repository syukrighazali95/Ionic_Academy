import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemon = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pokemon = this.route.snapshot.data["pokemon"];
    console.log("pokemon now: ", this.pokemon);
  }

}
