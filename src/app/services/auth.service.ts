import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  tokenKey: string = 'currentUser';

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | boolean {
    let storedToken:string = localStorage.getItem(this.tokenKey);
    if(!storedToken) return false;
    return storedToken;
  }

}
