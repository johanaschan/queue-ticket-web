import {Injectable} from '@angular/core';
import '../../shared';
import {Ticket} from './ticket';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class TicketService {

  private readonly queueTicketUrl = 'https://queue-ticket-api.herokuapp.com/tickets';
  private readonly options = new RequestOptions({ headers:  new Headers({ 'Content-Type': 'application/json' }) });

  constructor(private http: Http) {
  }

  getCurrentTicket(): Observable<Ticket> {
    return this.http.get(this.queueTicketUrl + '/current')
      .map(this.extractData)
      .catch(this.handleError);
  }

  nextTicket(): Observable<any>  {
    return this.http.post(this.queueTicketUrl + '/next', this.options)
      .map(response => {})
      .catch(this.handleError);
  }

  newTicket(): Observable<Ticket>  {
    return this.http.get(this.queueTicketUrl + '/new')
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
