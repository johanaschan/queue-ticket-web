import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import * as SockJS from 'sockjs-client';

import {Event} from './';
import {environment} from '../../environments/environment';

declare var Stomp: any;

@Injectable()
export class WebsocketService {

  readonly queueTicketApiUrl = environment.queueTicketApiUrl;

  private subject;

  init(): void {
    const sock = new SockJS(this.queueTicketApiUrl + '/tickets-websocket');
    const client = Stomp.over(sock);
    this.subject = new Subject<Event>();
    client.connect({}, () => {
      client.subscribe('/topic/event', (message) => {
        this.subject.next(JSON.parse(message.body));
      });
    });
  }

  getEvent(): Subject<Event> {
    return this.subject;
  }

}
