import { Injectable } from '@angular/core';
import { UserService } from '../shared/services';

@Injectable()
export class AuthService {

  private roles: Array<string>;
  private token: string;
  private loggedIn: boolean = false;

  constructor(userService: UserService) {
    this.roles = ['admin', 'customer'];
  }

  login(username: string, password: string): boolean {
    this.loggedIn = true;
    return true;
    // this.userService.login(username,password);
  }


  getRoles(): Array<string> {
    return this.roles;
  }

  hasRole(role: string): boolean {
    return this.roles.indexOf(role) > -1;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

}
