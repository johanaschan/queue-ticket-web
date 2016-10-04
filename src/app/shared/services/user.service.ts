import { Injectable } from'@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs';

import { HttpBaseService } from './http-base.service';

@Injectable()
export class UserService extends HttpBaseService {

  constructor(private http: Http) {
    super();
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post(this.queueTicketApiUrl + '/user/login/', {name: username, password: password})
      .map(this.extractData)
      .catch(this.handleError);
  }

  test(token: string): Observable<string> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.queueTicketApiUrl + '/tickets/NOTUSED', options)
      .catch(this.handleError);
  }

}
