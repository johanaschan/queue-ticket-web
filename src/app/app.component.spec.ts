import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { AuthService } from './security';


@Component({selector: 'app-admin', template: ''})
class AdminStubComponent {
}

@Component({selector: 'app-customer', template: ''})
class CustomerStubComponent {
}

// tslint:disable-next-line:component-selector-prefix
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

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AdminStubComponent,
        CustomerStubComponent,
        RouterOutletStubComponent
      ],
      providers: [
        {provide: AuthService, useClass: AuthServiceStub}
      ]
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('QueueTicket');
  }));

  it('should call authService should be called with role user have', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.hasRole('role')).toBe(true);
  });

  it('should call authService should be called with role user do not have', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.hasRole('noRole')).toBe(false);
  });

});
