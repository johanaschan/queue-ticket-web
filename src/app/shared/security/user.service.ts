import { Injectable } from'@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { HttpBaseService } from '../http';

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



}
