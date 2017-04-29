import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AuthService } from './auth.service';

@Injectable()
export class ApiService {

  private baseUrl: string = `https://spaceapp2017.herokuapp.com`;

  constructor(private http: Http, private auth: AuthService, private router: Router) {}

  buildHeader(): RequestOptions {
    let token = this.auth.getToken();
    if(!token) this.router.navigate(['/login']);
    let headers = new Headers({ 'token': token });
    return new RequestOptions({ headers: headers });
  }

  getChallenges(): Observable<any> {
    return this.http.get(`${this.baseUrl}/challenge`, this.buildHeader());
  }

  uploadFile(type: string, file) {
    let formData = new FormData();
    formData.append("name", "Name");
    formData.append("file", file);

    return this.http.post(`${this.baseUrl}/participation`, formData, this.buildHeader());
  }

  login(user): Observable<boolean> {
    return this.http.post(`${this.baseUrl}/user/login`, user).map(this.manageUser, this);
  }

  logout() {
    this.auth.removeToken();
    this.router.navigate(['/login']);
  }

  createUser(user): Observable<boolean> {
    return this.http.post(`${this.baseUrl}/user`, user).map(this.manageUser, this);
  }

  private manageUser(res) {
    let token = res.json();
    if (token) {
      this.auth.setToken(token);
      return true;
    } else {
      return false;
    }
  }
}
