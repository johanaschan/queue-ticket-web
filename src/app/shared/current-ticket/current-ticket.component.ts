import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ticket } from '../';
import { TicketService, WebsocketService } from '../services';

@Component({
  selector: 'app-current-ticket',
  templateUrl: 'current-ticket.component.html',
  styleUrls: ['current-ticket.component.css']
})
export class CurrentTicketComponent implements OnInit, OnDestroy {

  currentTicket: Ticket;
  size: number;
  private subscription: Subscription;

  constructor(private ticketService: TicketService, private webSocketService: WebsocketService) {
  }

  ngOnInit(): void {
    this.fetchInformation();
    this.subscription = this.webSocketService.getEvent().subscribe(
      event => this.fetchInformation());
  }

  ngOnDestroy(): void {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
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
