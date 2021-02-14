import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  people: any;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.people = this.api.getPeople();
  }

  openDetails(person) {
    let split = person.url.split('/');
    let id = split[split.length -2];
    this.router.navigateByUrl(`tabs/people/${id}`);
  }

}
