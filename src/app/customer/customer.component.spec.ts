import { TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';

import { CustomerComponent } from './';
import { Ticket, TicketStatus } from '../shared';
import { TicketService, WebsocketService } from '../shared/services';
import { PrettyTimePipe } from '../shared/pipes';

const queueTicketNumber = 100;

class TicketServiceStub {

  customerTicket(): Subject<Ticket> {
    const ticket = new Subject<Ticket>();
    ticket.next(new Ticket(1, queueTicketNumber, 1));
    return ticket;
  }

  newTicket(): Observable<Ticket> {
    return Observable.of(new Ticket(1, queueTicketNumber, 1));
  }

  ticketStatus(ticketNumber: number): Observable<TicketStatus> {
    return Observable.of(new TicketStatus(1, 1));
  }

  dropTicket(ticketNumber: any): Observable<Response> {
    return Observable.of(new Response(new ResponseOptions()));
  }
}

class WebsocketServiceStub {

  getEvent(): Subject<Event> {
    return new Subject<Event>();
  }
}

@Component({selector: 'app-current-ticket', template: ''})
class CurrentStubComponent {
}

describe('CustomerComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerComponent,
        CurrentStubComponent,
        PrettyTimePipe
      ],
      providers: [
        {provide: TicketService, useClass: TicketServiceStub},
        {provide: WebsocketService, useClass: WebsocketServiceStub}
      ]
    });
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should render new ticket number in a h4 tag and drop ticket button', async(() => {
    const fixture = TestBed.createComponent(CustomerComponent);
    fixture.detectChanges();
    fixture.debugElement.query(By.css(('button'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toEqual('Your ticket: ' + queueTicketNumber);
    expect(compiled.querySelector('button').textContent).toEqual('Drop ticket');
  }));

  it('should render ticket status', async(() => {
    const fixture = TestBed.createComponent(CustomerComponent);
    fixture.detectChanges();
    fixture.debugElement.query(By.css(('button'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.debugElement.query(By.css(('button.btn-success'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.ticket-status')).toBeTruthy();
  }));

  it('should render new ticket button after drop ticket', async(() => {
    const fixture = TestBed.createComponent(CustomerComponent);
    fixture.detectChanges();
    fixture.debugElement.query(By.css(('button'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.debugElement.query(By.css(('button'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('New ticket');
  }));
});
