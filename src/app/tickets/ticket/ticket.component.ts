import {Component} from '@angular/core';
import {TicketService, Ticket} from '../shared';

@Component({
  selector: 'app-ticket',
  templateUrl: 'ticket.component.html',
  styleUrls: ['ticket.component.css'],
  providers: [TicketService]
})
export class TicketComponent {

  private newTicket: Ticket;
  private currentTicket: Ticket;
  private errorMessage: string;

  constructor(private ticketService: TicketService) {
  }

  getCurrentTicket(): void {
    this.ticketService.getCurrentTicket().subscribe(
      currentTicket => this.currentTicket = currentTicket,
      error => this.errorMessage = <any>error);
  }

  nextTicket(): void {
    this.ticketService.nextTicket().subscribe(
      response => this.getCurrentTicket(),
      error => this.errorMessage = <any>error);
  }

  createNewTicket(): void {
    this.ticketService.newTicket().subscribe(
      newTicket => this.newTicket = newTicket,
      error => this.errorMessage = <any>error);
  }

}
