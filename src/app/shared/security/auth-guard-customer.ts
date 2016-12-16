import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuardLoggedInBase } from './auth-guard-logged-in-base';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardCustomer extends AuthGuardLoggedInBase {

  constructor(authService: AuthService, router: Router) {
    super(authService, router);
  }

  hasCorrectRole(): boolean {
      return this.authService.hasRole('CUSTOMER');
  }

}
