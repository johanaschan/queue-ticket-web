import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export abstract class AuthGuardLoggedInBase implements CanActivate {

  protected authService: AuthService;
  protected router: Router;

constructor( authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

    canActivate() {
      if (this.authService.isLoggedIn()) {
        return this.hasCorrectRole();
      } else {
        this.router.navigate(['login']);
      }
    }

   abstract hasCorrectRole(): boolean;

}
