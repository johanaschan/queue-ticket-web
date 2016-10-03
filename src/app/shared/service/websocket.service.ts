import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';
const Stomp = require('stompjs/lib/stomp').Stomp;

import { Event } from '../.';
import { environment } from '../../../environments/environment';

@Injectable()
export class WebsocketService {

  readonly queueTicketApiUrl = environment.queueTicketApiUrl;

  private event;

  constructor(event?: Observable<Event>) {
    if (event == null) {
      this.init();
    } else {
      this.event = event;
    }

  }

  init() {
    const sock = new SockJS(this.queueTicketApiUrl + '/tickets-websocket');
    const client = Stomp.over(sock);
    this.event = new Subject<Event>();
    client.connect({}, () => {
      client.subscribe('/topic/event', (message) => {
        this.event.next(JSON.parse(message.body));
      });
    });
  }

  getEvent(): Observable<Event> {
    return this.event;
  }

}
