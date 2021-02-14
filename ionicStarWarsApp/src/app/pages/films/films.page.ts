import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films: Observable<any>;

  constructor(private navController: NavController, private router: Router, private api: ApiService) { }

  ngOnInit() {
    // this.films = this.http.get('https://swapi.dev/api/films');
    // this.films.subscribe(data => {
    //   console.log('my data: ', data)
    // })
    this.films = this.api.getFilms();
  }

  openDetails(film) {
    // console.log(film.url);
    // https://swapi.dev/api/films/${id}
    // [https:,"",swapi.dev,api,films,5,"" ]
    let split = film.url.split('/');
    console.log(split);
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }

  goToPlanets() {
    this.navController.navigateRoot('/tabs/planets')
  }

}
