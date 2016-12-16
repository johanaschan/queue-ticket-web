import { AuthGuardCustomer } from './auth-guard-customer';

describe('AuthGuardCustomer', () => {

  let authGuardCustomer;
  let authService;
  let router;

  beforeEach(() => {
    authService = jasmine.createSpyObj('authService', ['isLoggedIn', 'hasRole']);
    authService.hasRole.and.callFake(function(role) {
      if (role === 'CUSTOMER') {
        return true;
      };
      return false;
    });
    router = jasmine.createSpyObj('router', ['navigate']);
    authGuardCustomer = new AuthGuardCustomer(authService, router);
  });

  it('logged in and have correct role should return true', () => {
    authService.isLoggedIn.and.returnValue(true);
    expect(authGuardCustomer.canActivate()).toBe(true);
    expect(authService.hasRole).toHaveBeenCalledWith('CUSTOMER');
  });

  it('logged in but have incorrect role should return false', () => {
    authService.isLoggedIn.and.returnValue(true);
    authService.hasRole.and.callFake(function(role) {
      if (role === 'otherRole') {
        return true;
      };
      return false;
    });
    expect(authGuardCustomer.canActivate()).toBe(false);
    expect(authService.hasRole).toHaveBeenCalledWith('CUSTOMER');
  });

});
