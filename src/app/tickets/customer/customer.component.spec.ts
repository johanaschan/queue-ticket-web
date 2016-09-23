import {TestBed, async} from '@angular/core/testing';
import {CustomerComponent} from './';
import {Ticket, TicketService} from '../shared';
import {Observable} from 'rxjs';
import {By} from '@angular/platform-browser';
import {Component} from '@angular/core';

const queueTicketNumber = 100;

class TicketServiceStub {

  newTicket(): Observable<any> {
    return Observable.from([new Ticket(1, queueTicketNumber)]);
  }
}


@Component({selector: 'app-current', template: ''})
class CurrentStubComponent {}


describe('CustomerComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerComponent,
        CurrentStubComponent
      ]
    }).overrideComponent(CustomerComponent, {
      set: {
        providers: [
          {provide: TicketService, useClass: TicketServiceStub}
        ]
      }
    });
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should render new ticket number in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(CustomerComponent);
    fixture.debugElement.query(By.css(('button'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toEqual('New ticket: ' + queueTicketNumber);
  }));
});