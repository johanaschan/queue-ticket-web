import {TestBed, async} from '@angular/core/testing';
import {AdminComponent} from './';
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

  resetTickets(): Observable<any> {
    this.queueTickerNumber = 0;
    return Observable.from([{}]);
  }
}

describe('AdminComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent
      ]
    }).overrideComponent(AdminComponent, {
      set: {
        providers: [
          {provide: TicketService, useClass: TicketServiceStub}
        ]
      }
    });
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should render current ticket number in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toEqual('Current ticket: ' + queueTicketNumber);
  }));

  it('should raise ticket number', async(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.debugElement.query(By.css(('button.next-ticket'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toEqual('Current ticket: ' + (queueTicketNumber + 1));
  }));

  it('should reset ticket numbers', async(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.debugElement.query(By.css(('button.reset-tickets'))).triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toBeNull();
  }));
});
