import {Component, OnInit} from '@angular/core';
import {TicketService, Ticket} from '../shared';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css'],
  providers: [TicketService]
})
export class AdminComponent implements OnInit {

  private currentTicket: Ticket;
  private errorMessage: string;

  constructor(private ticketService: TicketService) {
  }

  getCurrentTicket(): void {
    this.ticketService.getCurrentTicket().subscribe(
      currentTicket => this.currentTicket = currentTicket,
      error => {
        this.currentTicket = null;
        this.errorMessage = <any>error;
      });
  }

  nextTicket(): void {
    this.ticketService.nextTicket().subscribe(
      response => this.getCurrentTicket(),
      error => this.errorMessage = <any>error);
  }

  resetTickets(): void {
    this.ticketService.resetTickets().subscribe(
      response => this.getCurrentTicket(),
      error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getCurrentTicket();
  }

}
