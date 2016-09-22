import {TestBed, async} from '@angular/core/testing';
import {TicketComponent} from './';
import {Ticket, TicketService} from '../shared';
import {Observable} from 'rxjs';
import {By} from '@angular/platform-browser';

const queueTicketNumber = 100;

class TicketServiceStub {
  private queueTickerNumber = queueTicketNumber;
  getCurrentTicket(): Observable<Ticket> {
    return Observable.from([new Ticket(1, this.queueTickerNumber)]);
  }
  nextTicket(): Observable<any> {
    this.queueTickerNumber = queueTicketNumber + 1;
    return Observable.from([{}]);
  }
  newTicket(): Observable<any> {
    return Observable.from([new Ticket(1, queueTicketNumber * 5)]);
  }
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

  it('should render current ticket number in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(TicketComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.current-ticket h4').textContent).toBe('Current ticket: ' + queueTicketNumber);
  }));

  it('should raise ticket number', async(() => {
    const fixture = TestBed.createComponent(TicketComponent);
    fixture.debugElement.query(By.css(('.current-ticket button'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.current-ticket h4').textContent).toBe('Current ticket: ' + (queueTicketNumber + 1));
  }));

  it('should render new ticket number in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(TicketComponent);
    fixture.debugElement.query(By.css(('.new-ticket button'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.new-ticket h4').textContent).toBe('New ticket: ' + queueTicketNumber * 5);
  }));
});
