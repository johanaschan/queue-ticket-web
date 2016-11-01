import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private claims: Array<string>;
  private token: string;

  getClaims(): Array<string> {
    return this.claims;
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

}
