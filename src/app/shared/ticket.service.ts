import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable, Subject} from 'rxjs';

import {Ticket, TicketStatus} from './';
import {LocalStorageService} from './local-storage.service';
import {environment} from '../../environments/environment';

@Injectable()
export class TicketService {

  readonly queueTicketApiUrl = environment.queueTicketApiUrl;

  constructor(private http: Http, private localStorageService: LocalStorageService) {
  }

  currentTicket(): Observable<Ticket> {
    return this.http.get(this.queueTicketApiUrl + '/tickets/current')
      .map(this.extractData)
      .catch(this.handleError);
  }

  size(): Observable<number> {
    return this.http.get(this.queueTicketApiUrl + '/tickets/size')
      .map(this.extractData)
      .catch(this.handleError);
  }

  version(): Observable<number> {
    return this.http.get(this.queueTicketApiUrl + '/tickets/version')
      .map(this.extractData)
      .catch(this.handleError);
  }

  nextTicket(): Observable<Response> {
    return this.http.post(this.queueTicketApiUrl + '/tickets/next', null)
      .catch(this.handleError);
  }

  newTicket(): Observable<Ticket> {
    return this.http.get(this.queueTicketApiUrl + '/tickets/new')
      .map(this.extractData)
      .do(newTicket => this.localStorageService.setCustomerTicket(newTicket))
      .catch(this.handleError);
  }

  dropTicket(ticketNumber: any): Observable<Response> {
    return this.http.delete(this.queueTicketApiUrl + '/tickets/drop/' + ticketNumber)
      .do(newTicket => this.localStorageService.setCustomerTicket(null))
      .catch(this.handleError);
  }

  ticketStatus(ticketNumber: any): Observable<TicketStatus> {
    return this.http.get(this.queueTicketApiUrl + '/tickets/ticketstatus/' + ticketNumber)
      .map(this.extractData)
      .catch(this.handleError);
  }

  resetTickets(): Observable<Response> {
    return this.http.delete(this.queueTicketApiUrl + '/tickets/reset')
      .catch(this.handleError);
  }

  customerTicket(): Subject<Ticket> {
    let ticket = this.localStorageService.getCustomerTicket();
    const subject = new Subject<Ticket>();
    if (ticket != null) {
      this.version().subscribe(version => {
        if (version === ticket.version) {
          subject.next(ticket);
          subject.complete();
        } else {
          this.localStorageService.setCustomerTicket(null);
        }
      });
    } else {
      subject.complete();
    }
    return subject;
  }

  private extractData(response: Response) {
    let data;
    if (response.text() !== '') {
      data = response.json();
    } else {
      data = null;
    }
    return data;
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
