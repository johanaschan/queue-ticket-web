import {TestBed, async} from '@angular/core/testing';
import {CurrentComponent} from './';
import {Ticket, TicketService} from '../shared';
import {Observable} from 'rxjs';

const queueTicketNumber = 100;

class TicketServiceStub {

  private queueTickerNumber = queueTicketNumber;

  getCurrentTicket(): Observable<Ticket> {
    return Observable.from([new Ticket(1, this.queueTickerNumber)]);
  }

}

describe('CurrentComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentComponent
      ]
    }).overrideComponent(CurrentComponent, {
      set: {
        providers: [
          {provide: TicketService, useClass: TicketServiceStub}
        ]
      }
    });
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(CurrentComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  // it('should render current ticket number in a h4 tag', async(() => {
  //   const fixture = TestBed.createComponent(CurrentComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h4').textContent).toEqual('Current ticket: ' + queueTicketNumber);
  // }));

});
