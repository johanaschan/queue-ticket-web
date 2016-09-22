import {Injectable} from '@angular/core';
import '../../shared';
import {Ticket} from './ticket';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class TicketService {

  private readonly queueTicketUrl = 'https://queue-ticket-api.herokuapp.com/tickets';

  constructor(private http: Http) {
  }

  getCurrentTicket(): Observable<Ticket> {
    return this.http.get(this.queueTicketUrl + '/current')
      .map(this.extractData)
      .catch(this.handleError);
  }

  nextTicket(): Observable<any>  {
    return this.http.post(this.queueTicketUrl + '/next', null)
      .map(response => {})
      .catch(this.handleError);
  }

  newTicket(): Observable<Ticket>  {
    return this.http.get(this.queueTicketUrl + '/new')
      .map(this.extractData)
      .catch(this.handleError);
  }

  resetTickets(): Observable<Ticket>  {
    return this.http.delete(this.queueTicketUrl + '/reset')
      .map(response => {})
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
