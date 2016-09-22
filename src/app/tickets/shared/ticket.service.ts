import {Injectable} from '@angular/core';
import '../../shared';
import {Ticket} from './ticket';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class TicketService {

  private queueTicketUrl = 'https://queue-ticket-api.herokuapp.com/tickets/current';

  constructor(private http: Http) {
  }

  getCurrentTicket(): Observable<Ticket> {
    return this.http.get(this.queueTicketUrl)
      .map(this.extractData)
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
