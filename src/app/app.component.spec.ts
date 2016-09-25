import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Component} from '@angular/core';

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

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AdminStubComponent,
        CustomerStubComponent,
        RouterOutletStubComponent
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
});
