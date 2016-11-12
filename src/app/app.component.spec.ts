import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { AuthService } from './security';
import { Router } from '@angular/router';

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

  isLoggedIn(): boolean {
    return true;
  }
}

class RouterStub {
    navigate(route: Array<string>): void {
    }
}

describe('AppComponent', () => {

  beforeEach(() => {
    this.authServiceStub = new AuthServiceStub();
    this.routerStub = new RouterStub();
    spyOn(this.authServiceStub, 'isLoggedIn');
    spyOn(this.routerStub, 'navigate');
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AdminStubComponent,
        CustomerStubComponent,
        RouterOutletStubComponent
      ],
      providers: [
        {provide: AuthService, useValue: this.authServiceStub},
        {provide: Router, useValue: this.routerStub}
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

  it('isLoggedIn should have been called', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(this.authServiceStub.isLoggedIn).toHaveBeenCalled();
  }));

  it('isLoggedIn should have been called', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(this.authServiceStub.isLoggedIn).toHaveBeenCalled();
  }));

});
