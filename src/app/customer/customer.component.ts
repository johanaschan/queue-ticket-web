import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ticket, TicketStatus } from '../shared';
import { TicketService, WebsocketService } from '../shared/services';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {

  ticket: Ticket;
  ticketStatus: TicketStatus;
  private subscription: Subscription;

  constructor(private ticketService: TicketService, private websocketService: WebsocketService) {
  }

  ngOnInit(): void {
    this.ticketService.customerTicket().subscribe(ticket => this.ticket = ticket);
    this.subscription = this.websocketService.getEvent().subscribe(
      event => {
        if (event.event === 'RESET') {
          this.reset();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  newTicket(): void {
    this.ticketService.newTicket().subscribe(
      ticket => this.ticket = ticket);
  }

  dropTicket(): void {
    this.ticketService.dropTicket(this.ticket.number).subscribe(
      response => {
        this.reset();
      });
  }

  getTicketStatus(): void {
    this.ticketService.ticketStatus(this.ticket.number).subscribe(
      ticketStatus => {
        this.ticketStatus = ticketStatus;
      });
  }

  private reset(): void {
    this.ticket = null;
    this.ticketStatus = null;
  }

}
