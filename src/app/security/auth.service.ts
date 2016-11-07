import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private roles: Array<string>;
  private token: string;

  constructor() {
    this.roles = ['admin', 'customer'];
  }

  getRoles(): Array<string> {
    return this.roles;
  }

  hasRole(role: string): boolean {
    console.log(role);
    return this.roles.indexOf(role) > -1;
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

}
