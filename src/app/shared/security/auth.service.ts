import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService {

  private roles: Array<string>;
  private token: string;
  private loggedIn = false;

  constructor(private userService: UserService) {
  }

  login(username: string, password: string): Observable<String> {
    const subject = new Subject<string>();
    this.userService.login(username, password).subscribe(
      response => {
        this.loggedIn = true;
        this.setToken((response as any).token);
        this.decodeAndSetRoles((response as any).token);
        subject.next('SUCCESS');
        subject.complete();
      },
      error => subject.error(error)
    );
    return subject;
  }

  decodeAndSetRoles(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decoded = atob(base64);
    const tokenObject: any = JSON.parse(decoded);
    this.roles = tokenObject.roles.split(',');
  }

  getRoles(): Array<string> {
    return this.roles;
  }

  hasRole(role: string): boolean {
    return this.roles.indexOf(role) > -1;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

}
