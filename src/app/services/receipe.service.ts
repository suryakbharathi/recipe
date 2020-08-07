import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {
  api ='http://starlord.hackerearth.com' ;

  constructor( private http: HttpClient ) { }

  getReceipeList () {
    return this.http.get(this.api + '/recipe');
  }

}
