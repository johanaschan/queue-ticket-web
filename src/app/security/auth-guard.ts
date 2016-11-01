import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './';

@Injectable()
export class AuthGuard implements CanActivate {

constructor() {}

  canActivate() {
    return true;
  }
}
