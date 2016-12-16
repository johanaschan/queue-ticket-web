import { AuthGuardLoggedIn } from './auth-guard-logged-in';

describe('AuthGuardLoggedIn', () => {

  let authGuardLoggedIn;
  let authService;
  let router;

  beforeEach(() => {
    authService = jasmine.createSpyObj('authService', ['isLoggedIn', 'hasRole']);
    router = jasmine.createSpyObj('router', ['navigate']);
    authGuardLoggedIn = new AuthGuardLoggedIn(authService, router);
  });

  it('logged in should return true', () => {
    authService.isLoggedIn.and.returnValue(true);
    expect(authGuardLoggedIn.canActivate()).toBe(true);
  });

  it('not logged in should route to login', () => {
    authService.isLoggedIn.and.returnValue(false);
    authGuardLoggedIn.canActivate();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });

});
