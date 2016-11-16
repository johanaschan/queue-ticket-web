import { AuthGuardAdmin } from './auth-guard-admin';

describe('AuthGuardAdmin', () => {

  let authGuardAdmin;
  let authService;
  let router;

  beforeEach(() => {
    authService = jasmine.createSpyObj('authService', ['isLoggedIn', 'hasRole']);
    authService.hasRole.and.callFake(function(role) {
      if (role === 'admin') {
        return true;
      };
      return false;
    });
    router = jasmine.createSpyObj('router', ['navigate']);
    authGuardAdmin = new AuthGuardAdmin(authService, router);
  });

  it('logged in and have correct role should return true', () => {
    authService.isLoggedIn.and.returnValue(true);
    expect(authGuardAdmin.canActivate()).toBe(true);
    expect(authService.hasRole).toHaveBeenCalledWith('admin');
  });

  it('not logged in should route to login', () => {
    authService.isLoggedIn.and.returnValue(false);
    authGuardAdmin.canActivate();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });

  it('logged in but have incorrect role should return false', () => {
    authService.isLoggedIn.and.returnValue(true);
    authService.hasRole.and.callFake(function(role) {
      if (role === 'otherRole') {
        return true;
      };
      return false;
    });
    expect(authGuardAdmin.canActivate()).toBe(false);
    expect(authService.hasRole).toHaveBeenCalledWith('admin');
  });

});
