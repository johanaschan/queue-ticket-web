import{ Component }from'@angular/core';
import { UserService, AuthorizationService }from './.';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  username = 'Aschan';
  password = 'Lmar';
  token: String;
  errorMessage: String;

  constructor(private userService: UserService, private authorizationService: AuthorizationService) {
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(
      response => {
        this.authorizationService.setToken((response as any).token);
      },
      error => this.errorMessage = <any>error);
  }

  test() {
    this.userService.test(this.authorizationService.getToken()).subscribe(
      response => {
        this.write(response);
      },
      error => this.errorMessage = <any>error);
  }

  write(message) {
    this.errorMessage = message;
  }

}
