import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuardLoggedInBase } from './auth-guard-logged-in-base';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardAdmin extends AuthGuardLoggedInBase {

  constructor(authService: AuthService, router: Router) {
    super(authService, router);
  }

  hasCorrectRole(): boolean {
      return this.authService.hasRole('ADMIN');
  }
}
