import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private baseUrl: string = `https://spaceapp2017.herokuapp.com`;

  private headers = new Headers({ 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTM0Njg5MzAsImRhdGEiOlt7ImlkIjoxLCJlbWFpbCI6ImpvcmdlYXpvcmluQGdtYWlsLmNvbSIsIm5hbWUiOiJKb3JnZSBBem9yaW4ifV0sImlhdCI6MTQ5MzQ2NTMzMH0.pjacbzecTlQcXAXxeg58gbH9yrjs9qKobgdL4O4dd4Q'});
  private options = new RequestOptions({ headers: this.headers});

  getChallenges(): Observable<any> {
    return this.http.get(`${this.baseUrl}/challenge`, this.options);
  }

  uploadFile(type: string, file) {
    let formData = new FormData();

    formData.append("name", "Name");
    formData.append("file",  file);

    return this.http.post(`${this.baseUrl}/participation`, formData, this.options);
  }

  login(): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth/facebook`);
  }

}
