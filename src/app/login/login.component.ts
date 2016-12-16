import { Component } from '@angular/core';
import { AuthService } from '../shared/security';
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
  errorMessageExist : boolean = false;


  constructor(private authService: AuthService, private router: Router) {
    this.router = router;
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        this.errorMessageExist = false;
        this.router.navigate(['main']);
      },
      error => { debugger; this.errorMessage = error; this.errorMessageExist = true;}
    );
  }
}
