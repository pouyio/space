import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private baseUrl: string = `http://calapi.inadiutorium.cz/api/v0/en/calendars/default`;

  get(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
