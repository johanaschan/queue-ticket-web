import {TestBed, async, fakeAsync, tick, discardPeriodicTasks} from '@angular/core/testing';
import {CurrentTicketComponent} from './';
import {Ticket, TicketService} from '../';
import {Observable} from 'rxjs';

const queueTicketNumber = 100;

class TicketServiceStub {

  currentTicket(): Observable<Ticket> {
    return Observable.of(new Ticket(1, queueTicketNumber));
  }

}

describe('CurrentTicketComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentTicketComponent
      ],
      providers: [
        {provide: TicketService, useClass: TicketServiceStub}
      ]
    });
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(CurrentTicketComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should render current ticket number in a h4 tag', fakeAsync(() => {
    const fixture = TestBed.createComponent(CurrentTicketComponent);
    fixture.detectChanges();
    tick(1000);
    fixture.detectChanges();
    discardPeriodicTasks();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toEqual('Current ticket: ' + queueTicketNumber);
  }));

});
