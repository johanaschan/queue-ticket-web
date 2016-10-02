import{Injectable}from'@angular/core';
import {Http, Response, Headers,RequestOptions}from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

readonly queueTicketUserUrl = 'https://queue-ticket-api.herokuapp.com/user';

constructor(private http: Http) {

  }

  login(username: string,password: string):Observable<string> {
    return this.http.post(this.queueTicketUserUrl + '/login/',{name: username, password: password})
      .map(this.extractData)
      .catch(this.handleError);
  }

  test(token:string):Observable<string> {
  let headers = new Headers();
  headers.append('Authorization', 'Bearer ' + token);
  let options = new RequestOptions({headers: headers });
    return this.http.get('https://queue-ticket-api.herokuapp.com/tickets/NOTUSED',options)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    let data = response.json();
    if (data == null) {
      data = {};
    }
    return data;
  }

  private handleError(error: any) {
    debugger;
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
