import { Component } from '@angular/core';
import { AuthService } from '../security';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  token: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['main']);
    }// write incorrect message..
  }

}
