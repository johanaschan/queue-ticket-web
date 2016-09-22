import {TestBed, async} from '@angular/core/testing';
import {TicketComponent} from './';
import {Ticket, TicketService} from '../shared';
import {Observable} from 'rxjs';

const QUEUE_TICKET_NUMBER = 100;

class TicketServiceStub {
  getCurrentTicket(): Observable<Ticket> {
    return Observable.from([new Ticket(1, QUEUE_TICKET_NUMBER)]);
  };
}

describe('TicketComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TicketComponent
      ]
    }).overrideComponent(TicketComponent, {
      set: {
        providers: [
          { provide: TicketService, useClass: TicketServiceStub }
        ]
      }
    });
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(TicketComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should render number in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(TicketComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain(QUEUE_TICKET_NUMBER);
  }));
});
