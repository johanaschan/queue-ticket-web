import {Injectable} from '@angular/core';

import {Ticket} from './';

@Injectable()
export class LocalStorageService {

  private readonly customerKey = 'Customer';

  getCustomerTicket(): Ticket {
    const customerTicket = localStorage.getItem(this.customerKey);
    return JSON.parse(customerTicket);
  }

  setCustomerTicket(ticket: Ticket): void {
    localStorage.setItem(this.customerKey, JSON.stringify(ticket));
  }

}
