import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'c8b34374';
  
  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    let link = `${encodeURI(this.url)}?s=${title}&type=${type}&apikey=${this.apiKey}`;
    // console.log(link);
    return this.http.get(link).pipe(
      map(results => results['Search'])
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
