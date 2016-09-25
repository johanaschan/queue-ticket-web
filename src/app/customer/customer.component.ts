import {Component, OnInit} from '@angular/core';

import {Ticket, TicketService, TicketStatus} from '../shared';

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['customer.component.css']
})
export class CustomerComponent implements OnInit {

  private ticket: Ticket;
  private ticketStatus: TicketStatus;
  private errorMessage: string;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.ticket = this.ticketService.customerTicket();
  }

  newTicket(): void {
    this.ticketService.newTicket().subscribe(
      ticket => this.ticket = ticket,
      error => this.errorMessage = <any>error);
  }

  dropTicket(): void {
    this.ticketService.dropTicket(this.ticket.number).subscribe(
      response => this.ticket = null,
      error => this.errorMessage = <any>error);
  }

  getTicketStatus(): void {
    this.ticketService.ticketStatus(this.ticket.number).subscribe(
      ticketStatus => this.ticketStatus = ticketStatus,
      error => this.errorMessage = <any>error);
  }

}
