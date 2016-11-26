/* import { AuthService } from './';
import { Subject, Observable } from 'rxjs';

describe('AuthService', () => {

  let authService;
  let token: string = 'eyJhbGciOiJIUzUxMiJ9eyJ1c2VybmFtZSI6IkFzY2hhbiIsInJvbGVzIjoiQ'
    + '1VTVE9NRVIiLCJleHAiOjE0Nzk0OTc3ODl9HEQ4R1NoP3wyD2IrIUloVjAaC3sjWBIcMU'
    + 'zSk9aCNA==';


  beforeEach(() => {
    let userService = jasmine.createSpyObj('userService', ['login']);
    userService.login.and.callFake(function(username,password) {
      if(username === 'username' && password === 'password') {
        let obj: { token: string; } = { token: token};
        return Observable.of(obj);
      }else{
        return Observable.throw(new Error ('error'));
      }
    });
    authService = new AuthService(userService);
  });

  it('correct username and password should return true',() => {
    let result = '';
    authService.login('username','password').subscribe(
      response =>{ result = response;}
      ,error => result = error
    );
    debugger;
    expect(result).toBe('sucess');
  });

  it('incorrect username and password should return false',() => {
    let result = '';
    authService.login('user','pass').subscribe(
      response => result = response
      ,error => result = error
    );
      expect(result.message).toBe('error');
  });

  it('after correct login, user should continue to be logged in.',() => {
    expect(authService.isLoggedIn()).toBe(false);
    authService.login('username','password');
    expect(authService.isLoggedIn()).toBe(true);
  });

  it('after correct login, user should have customer role',() => {
    authService.login('username','password');
    expect(authService.hasRole('customer')).toBe(true);
  });


});

*/
