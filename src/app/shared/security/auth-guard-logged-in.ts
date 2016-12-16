import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuardLoggedInBase } from './auth-guard-logged-in-base';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardLoggedIn extends AuthGuardLoggedInBase {

  constructor(authService: AuthService, router: Router) {
    super(authService, router);
  }

<<<<<<< HEAD
   hasCorrectRole(): boolean {
    return true;
=======
  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
>>>>>>> fbacd85e1169b0eb000c807dde6a6d557fac473f
  }

}
