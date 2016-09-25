import {Component, OnInit} from '@angular/core';

import {Ticket, TicketService} from '../';

@Component({
  selector: 'app-current-ticket',
  templateUrl: 'current-ticket.component.html',
  styleUrls: ['current-ticket.component.css']
})
export class CurrentTicketComponent implements OnInit {

  private currentTicket: Ticket;
  private size: number;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.fetchInformation();
    setInterval(() => {
      this.fetchInformation();
    }, 1000);
  }

  getCurrentTicket(): void {
    this.ticketService.currentTicket().subscribe(
      currentTicket => this.currentTicket = currentTicket,
      error => this.currentTicket = null);
  }

  getSize(): void {
    this.ticketService.size().subscribe(
      size => this.size = size,
      error => this.size = null);
  }

  private fetchInformation(): void {
    this.getCurrentTicket();
    this.getSize();
  }

}
