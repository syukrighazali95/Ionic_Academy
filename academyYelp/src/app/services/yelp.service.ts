import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const CORS = "https://academy-yelp-api-proxy.herokuapp.com";
const URL = "https://api.yelp.com/v3";

@Injectable({
  providedIn: 'root'
})
export class YelpService {


  constructor(private http: HttpClient) {
    this.http.get(`${CORS}/${URL}/businesses/search?latitude=3.2048176&longitude=101.726346`).subscribe(res => {
      console.log('result: ', res);
    });
   }
}
