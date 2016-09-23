import {Component, OnInit} from '@angular/core';
import {TicketService, Ticket} from '../shared';

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

  getCurrentTicket(): void {
    this.ticketService.getCurrentTicket().subscribe(
      currentTicket => this.currentTicket = currentTicket,
      error => this.currentTicket = null);
  }

  ngOnInit(): void {
    setInterval(() => this.getCurrentTicket(), 1000);
  }

}
