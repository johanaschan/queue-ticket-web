import { TestBed} from '@angular/core/testing';
import { MainComponent } from './main.component';
import { AuthService } from '../shared/security';
import { Component } from '@angular/core';

// tslint:disable-next-line:component-selector
@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent {
}


class AuthServiceStub {

  hasRole(role: string): boolean {
    if (role === 'role') {
      return true;
    }
      return false;
  }

}


describe('MainComponent', () => {

 beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        RouterOutletStubComponent
      ],
      providers: [
        {provide: AuthService, useClass: AuthServiceStub}
      ]
    });
  });


  it('should call authService should be called with role user have', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.hasRole('role')).toBe(true);
  });

  it('should call authService should be called with role user do not have', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.hasRole('noRole')).toBe(false);
  });
});
