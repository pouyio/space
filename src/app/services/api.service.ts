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

  login(user): Observable<boolean> {
    return this.http.post(`${this.baseUrl}/user/login`, user).map(this.manageUser, this);
  }

  logout() {
    this.auth.removeToken();
    this.router.navigate(['/login']);
  }

  getRandomParticipation() {
    return this.http.get(`${this.baseUrl}/valoration/random`, this.buildHeader()).map(res => res.json());
  }

  postValoration(valoration: any) {
    return this.http.post(`${this.baseUrl}/valoration`, valoration, this.buildHeader()).map(res => res.json());
  }

  createUser(user): Observable<boolean> {
    return this.http.post(`${this.baseUrl}/user`, user).map(this.manageUser, this);
  }

  getCurrentChallenges(): Observable<any> {
    return this.http.get(`${this.baseUrl}/season/challenges?current=true`, this.buildHeader()).map(res => res.json());
  }

  getCurrentSeason(): Observable<any> {
    return this.http.get(`${this.baseUrl}/season/?current=true`, this.buildHeader()).map(res => res.json());
  }

  getAllChallenges(): Observable<any> {
    return this.http.get(`${this.baseUrl}/season/challenges`, this.buildHeader()).map(res => res.json());
  }

  getLeaderboard(challenge): Observable<any> {
    return this.http.get(`${this.baseUrl}/challenge/${challenge.id}/leaderboard`, this.buildHeader()).map(res => res.json());
  }

  getGlobalLeaderboard(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/leaderboard`, this.buildHeader()).map(res => res.json());
  }

  uploadFile(file: File, challenge: number) {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("challenge", challenge);

    return this.http.post(`${this.baseUrl}/participation`, formData, this.buildHeader());
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
