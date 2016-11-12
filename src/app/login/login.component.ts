import{ Component }from'@angular/core';
import { UserService } from '../shared/services';
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

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {
  }

  login() {
    if(this.authService.login(this.username,this.password)){
      this.router.navigate(['main']);
    }
    //this.userService.login(this.username, this.password).subscribe(
    //  response => {
    //    this.authService.setToken((response as any).token);
    //  },
    //  error => this.errorMessage = <any>error);
  }

  test() {
    this.userService.test(this.authService.getToken()).subscribe(
      response => {
        this.write(response);
      },
      error => this.errorMessage = <any>error);
  }

  write(message) {
    this.errorMessage = message;
  }

}
