import {Component, OnInit} from '@angular/core';
import {TicketService, Ticket} from '../shared';

@Component({
  selector: 'app-ticket',
  templateUrl: 'ticket.component.html',
  styleUrls: ['ticket.component.css'],
  providers: [TicketService]
})
export class TicketComponent implements OnInit {

  currentTicket: Ticket;
  errorMessage: string;

  constructor(private ticketService: TicketService) {
  }

  getCurrentTicket(): void {
    this.ticketService.getCurrentTicket().subscribe(
      currentTicket => this.currentTicket = currentTicket,
      error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getCurrentTicket();
  }

}
