import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardAdmin implements CanActivate {

  constructor(private authService: AuthService, private activatedRouteSnapshot: ActivatedRouteSnapshot) {}

  canActivate() {
    return this.authService.hasRole('admin');
  }
}
