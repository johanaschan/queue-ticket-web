import { Observable } from 'rxjs';

import { WebsocketService } from './.';
import { Event } from '../.';

describe('WebsocketService', () => {

  let websocketService;

  const event = Observable.of(new Event('TEST'));

  beforeEach(() => {
    websocketService = new WebsocketService(event);
  });

  it('should return event for getEvent', () => {
    expect(websocketService.getEvent()).toEqual(event);
  });

});
