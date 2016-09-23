import {TestBed, async} from '@angular/core/testing';
import {CustomerComponent} from './';
import {Ticket, TicketService} from '../shared';
import {Observable} from 'rxjs';
import {By} from '@angular/platform-browser';

const queueTicketNumber = 100;

class TicketServiceStub {
  private queueTickerNumber = queueTicketNumber;

  newTicket(): Observable<any> {
    return Observable.from([new Ticket(1, queueTicketNumber * 5)]);
  }
}

describe('CustomerComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerComponent
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
    expect(compiled.querySelector('h4').textContent).toEqual('New ticket: ' + queueTicketNumber * 5);
  }));
});
