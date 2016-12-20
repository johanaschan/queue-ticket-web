import { Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export abstract class HttpBaseService {

  readonly queueTicketApiUrl = environment.queueTicketApiUrl;

  extractData(response: Response) {
    let data;
    if (response.text() !== '') {
      data = response.json();
    } else {
      data = null;
    }
    return data;
  }

  handleError(error: any): ErrorObservable<any> {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
