import {Component, OnInit} from '@angular/core';

import {Ticket, TicketService} from '../shared';

@Component({
  selector: 'app-current',
  templateUrl: 'current.component.html',
  styleUrls: ['current.component.css'],
  providers: [TicketService]
})
export class CurrentComponent implements OnInit {

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
