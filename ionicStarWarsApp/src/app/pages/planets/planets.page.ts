import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  planets: any;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.planets = this.api.getPlanets();
  }

  openDetails(planet) {
    let split = planet.url.split("/");
    let id = split[split.length-2];
    this.router.navigateByUrl(`tabs/planets/${id}`);
  }

}
