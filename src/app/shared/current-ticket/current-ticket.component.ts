import {Component, OnInit} from '@angular/core';

import {Ticket, TicketService} from '../';

@Component({
  selector: 'app-current-ticket',
  templateUrl: 'current-ticket.component.html',
  styleUrls: ['current-ticket.component.css'],
  providers: [TicketService]
})
export class CurrentTicketComponent implements OnInit {

  private currentTicket: Ticket;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    setInterval(() => this.getCurrentTicket(), 1000);
  }

  getCurrentTicket(): void {
    this.ticketService.getCurrentTicket().subscribe(
      currentTicket => this.currentTicket = currentTicket,
      error => this.currentTicket = null);
  }

}
