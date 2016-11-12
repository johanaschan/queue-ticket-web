import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private roles: Array<string>;
  private token: string;
  private loggedIn : boolean = false;

  constructor() {
    this.roles = ['admin', 'customer'];
  }

  getRoles(): Array<string> {
    return this.roles;
  }

  hasRole(role: string): boolean {
    return this.roles.indexOf(role) > -1;
  }

  login(username: string, password: string): boolean{
    if(username === 'johan' && password ==='football'){
      this.loggedIn = true;
      return true;
    }
  }

  isLoggedIn(): boolean{
    return this.loggedIn;
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

}
