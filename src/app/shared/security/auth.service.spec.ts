import { AuthService } from './';
import { Observable } from 'rxjs/Observable';

describe('AuthService', () => {

  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkxtYXIiLCJyb2xlcyI6IkFETUlOIiwiZXhwIjoxNDgwMzUwNjMxfQ.' +
    'dQCEh_9q3U0ku9mVJu22rwAEPPiJ_D80QEV10l_jGHaM1ZTr5HP6bO0bpw20Mu66gxayrc3p4eMtLBLDc1E7aQ';

  let authService;

  beforeEach(() => {
    const userService = jasmine.createSpyObj('userService', ['login']);
    userService.login.and.callFake((username, password): any => {
      if (username === 'username' && password === 'password') {
        return Observable.of({token: token});
      } else {
        return Observable.throw(new Error('error'));
      }
    });
    authService = new AuthService(userService);
  });

  it('correct username and password should complete', (done) => {
    authService.login('username', 'password').subscribe(
      response => {
      },
      error => {
      },
      complete => done()
    );
  });

  it('incorrect username and password should return false', () => {
    let result;
    authService.login('user', 'pass').subscribe(
      response => result = response,
      error => result = error
    );
    expect(result.message).toBe('error');
  });

  it('after correct login, user should continue to be logged in.', () => {
    expect(authService.isLoggedIn()).toBe(false);
    authService.login('username', 'password');
    expect(authService.isLoggedIn()).toBe(true);
  });

  it('after correct login, user should have admin role', () => {
    authService.login('username', 'password');
    expect(authService.hasRole('ADMIN')).toBe(true);
  });

});
