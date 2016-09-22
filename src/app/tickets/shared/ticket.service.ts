import {Injectable} from '@angular/core';
import '../../shared';
import {Ticket} from './ticket';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class TicketService {

  private queueTicketUrl = 'https://queue-ticket-api.herokuapp.com/tickets';

  constructor(private http: Http) {
  }

  getCurrentTicket(): Observable<Ticket> {
    return this.http.get(this.queueTicketUrl + '/current')
      .map(this.extractData)
      .catch(this.handleError);
  }

  nextTicket(): Observable<any>  {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.queueTicketUrl + '/next', options)
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
