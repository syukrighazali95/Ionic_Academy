import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.page.html',
  styleUrls: ['./planets-details.page.scss'],
})
export class PlanetsDetailsPage implements OnInit {
  planet: any;
  resident_id: Array<object> = [];
  resident_list: Array<object> = [];
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPlanet(id).subscribe(res => {
      this.planet = res;
      console.log(this.planet);
      this.getResidents(this.planet);
    });
    for (var ids of this.resident_id) {
      console.log(ids);
      this.api.getPerson(ids).subscribe(res => {
        let person = res;
        console.log(person);
      });
    }
    
  }

  getResidents(origin) {
    let residents = origin.residents;
    // console.log(residents);
    for (var url of residents) {
      let split = url.split('/');
      let id = split[split.length-2];
      // console.log(id);
      this.resident_id.push(id);
    }
  }

}
