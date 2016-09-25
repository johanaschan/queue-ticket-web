import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

import {Ticket, TicketStatus} from './';
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class TicketService {

  readonly queueTicketApiUrl = 'https://queue-ticket-api.herokuapp.com/tickets';

  constructor(private http: Http, private localStorageService: LocalStorageService) {
  }

  currentTicket(): Observable<Ticket> {
    return this.http.get(this.queueTicketApiUrl + '/current')
      .map(this.extractData)
      .catch(this.handleError);
  }

  size(): Observable<number> {
    return this.http.get(this.queueTicketApiUrl + '/size')
      .map(this.extractData)
      .catch(this.handleError);
  }

  nextTicket(): Observable<any> {
    return this.http.post(this.queueTicketApiUrl + '/next', null)
      .catch(this.handleError);
  }

  newTicket(): Observable<Ticket> {
    return this.http.get(this.queueTicketApiUrl + '/new')
      .map(this.extractData)
      .do(newTicket => this.localStorageService.setCustomerTicket(newTicket))
      .catch(this.handleError);
  }

  dropTicket(ticketNumber: any): Observable<any> {
    return this.http.delete(this.queueTicketApiUrl + '/drop/' + ticketNumber)
      .do(newTicket => this.localStorageService.setCustomerTicket(null))
      .catch(this.handleError);
  }

  ticketStatus(ticketNumber: any): Observable<TicketStatus> {
    return this.http.get(this.queueTicketApiUrl + '/ticketstatus/' + ticketNumber)
      .map(this.extractData)
      .catch(this.handleError);
  }

  resetTickets(): Observable<Ticket> {
    return this.http.delete(this.queueTicketApiUrl + '/reset')
      .catch(this.handleError);
  }

  customerTicket(): Ticket {
    return this.localStorageService.getCustomerTicket();
  }

  private extractData(response: Response) {
    const body = response.json();
    return body || {};
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
