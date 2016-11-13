import { TestBed} from '@angular/core/testing';
import { AuthService } from './security';
import { Component } from '@angular/core';
import { UserService } from '../shared/services';


describe('AuthService', () => {

class UserServiceStub {

  login(username: string, password: string): boolean {
    if (username === 'username' && password === 'password') {
      return true;
    }
    return false;
  }

}


 beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthService,
      ],
      providers: [
        {provide: userService, useClass: UserServiceStub}
      ]
    });
  });

  it('should return true when login pass',() => {
    const fixture = TestBed.createComponent(AuthService)
    const authService = fixture.debugElement.componentInstance;
    expect(authService.login('username','password')).toBe(true);
  });

});
