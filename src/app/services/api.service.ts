import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private baseUrl: string = `https://spaceapp2017.herokuapp.com`;

  getChallenges(): Observable<any> {
    return this.http.get(`${this.baseUrl}/challenge`);
  }

}
