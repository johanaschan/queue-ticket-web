import {Component} from '@angular/core';

import {TicketService} from '../shared';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css'],
  providers: [TicketService]
})
export class AdminComponent {

  private errorMessage: string;

  constructor(private ticketService: TicketService) {
  }

  nextTicket(): void {
    this.ticketService.nextTicket().subscribe(
      response => {},
      error => this.errorMessage = <any>error);
  }

  resetTickets(): void {
    this.ticketService.resetTickets().subscribe(
      response => {},
      error => this.errorMessage = <any>error);
  }

}
