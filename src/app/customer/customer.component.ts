import {Component} from '@angular/core';

import {Ticket, TicketService} from '../shared';

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['customer.component.css'],
  providers: [TicketService]
})
export class CustomerComponent {

  private newTicket: Ticket;
  private errorMessage: string;

  constructor(private ticketService: TicketService) {
  }

  createNewTicket(): void {
    this.ticketService.newTicket().subscribe(
      newTicket => this.newTicket = newTicket,
      error => this.errorMessage = <any>error);
  }

}
