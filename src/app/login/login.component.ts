import{ Component }from'@angular/core';
import { UserService } from '../shared/services';
import { AuthenticationService } from '../security';

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

  constructor(private userService: UserService, private authenticationService: AuthenticationService) {
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(
      response => {
        this.authenticationService.setToken((response as any).token);
      },
      error => this.errorMessage = <any>error);
  }

  test() {
    this.userService.test(this.authenticationService.getToken()).subscribe(
      response => {
        this.write(response);
      },
      error => this.errorMessage = <any>error);
  }

  write(message) {
    this.errorMessage = message;
  }

}
