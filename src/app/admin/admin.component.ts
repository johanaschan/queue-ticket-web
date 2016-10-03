import { Component } from '@angular/core';

import { TicketService } from '../shared/service';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent {

  constructor(private ticketService: TicketService) {
  }

  nextTicket(): void {
    this.ticketService.nextTicket().subscribe(
      response => {});
  }

  resetTickets(): void {
    this.ticketService.resetTickets().subscribe(
      response => {});
  }

}
