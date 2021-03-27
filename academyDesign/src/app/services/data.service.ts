import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://newsapi.org/v2";
  apiKey = "";

  constructor(private http: HttpClient) { }

  getTopNews(cat){
    return this.http.get(
      `${this.url}/top-headlines?category=${cat}&country=us&apiKey=${
        this.apiKey
      }`
    ).pipe(
      map(res => res["articles"])
    );
  }

  getSportSources(){
    return this.http.get(
      `${this.url}/sources?category=sports&language=en&apiKey=${this.apiKey}`
    ).pipe(map(
      res => res['sources'])
      )
  }

  getRandomUsers(){
    return this.http.get(`http://randomuser.me/api?results=20`
    ).pipe(map(res => res['results']))
  }
}
