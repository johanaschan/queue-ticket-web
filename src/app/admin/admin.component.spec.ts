import {TestBed, async} from '@angular/core/testing';
import {AdminComponent} from './';
import {TicketService} from '../shared';
import {Observable} from 'rxjs';
import {By} from '@angular/platform-browser';
import {Component} from '@angular/core';

let queueTicketNumber = 100;

class TicketServiceStub {

  nextTicket(): Observable<any> {
    queueTicketNumber += 1;
    return Observable.of({});
  }

  resetTickets(): Observable<any> {
    queueTicketNumber = 0;
    return Observable.of({});
  }
}

@Component({selector: 'app-current-ticket', template: ''})
class CurrentStubComponent {
}

describe('AdminComponent', () => {
  beforeEach(() => {
    queueTicketNumber = 100;
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent,
        CurrentStubComponent
      ],
      providers: [
        {provide: TicketService, useClass: TicketServiceStub}
      ]
    });
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should raise ticket number', async(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.debugElement.query(By.css(('button.next-ticket'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(queueTicketNumber).toEqual(101);
  }));

  it('should reset ticket numbers', async(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.debugElement.query(By.css(('button.reset-tickets'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(queueTicketNumber).toEqual(0);
  }));
});
