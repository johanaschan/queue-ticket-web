import { Observable } from 'rxjs';

import { TicketService } from './.';
import { Ticket } from '../.';

import { Headers, RequestOptions } from '@angular/http';

describe('TicketService', () => {

  let ticketService;
  let http;
  let localStorageService;
  let authService;
  let testToken = 'testToken';
  let requestOptions;

  beforeEach(() => {
    http = jasmine.createSpyObj('http', ['get', 'delete', 'post']);
    http.get.and.returnValue(Observable.empty());
    http.delete.and.returnValue(Observable.empty());
    http.post.and.returnValue(Observable.empty());
    localStorageService = jasmine.createSpyObj('localStorageService', ['getCustomerTicket', 'setCustomerTicket']);
    localStorageService.getCustomerTicket.and.returnValue(new Ticket(1, 1, 1));
    authService = jasmine.createSpyObj('authService', ['getToken']);
    authService.getToken.and.returnValue(testToken);
    ticketService = new TicketService(http, localStorageService, authService);
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + testToken);
    requestOptions =  new RequestOptions({headers: headers});
  });

  it('should call http.get current', () => {
    ticketService.currentTicket();
    expect(http.get).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/current', requestOptions);
  });

  it('should call http.post next', () => {
    ticketService.nextTicket();
    expect(http.post).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/next', null, requestOptions);
  });

  it('should call http.get new', () => {
    ticketService.newTicket();
    expect(http.get).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/new', requestOptions);
  });

  it('should call http.delete drop', () => {
    const ticketNumber = 10;
    ticketService.dropTicket(ticketNumber);
    expect(http.delete).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/drop/' + ticketNumber, requestOptions);
  });

  it('should call http.get ticketstatus', () => {
    const ticketNumber = 10;
    ticketService.ticketStatus(ticketNumber);
    expect(http.get).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/ticketstatus/' + ticketNumber, requestOptions);
  });

  it('should call http.delete reset', () => {
    ticketService.resetTickets();
    expect(http.delete).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/reset', requestOptions);
  });

  it('should call http.get reset', () => {
    ticketService.size();
    expect(http.get).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/size', requestOptions);
  });

  it('should call localStorageService.getCustomerTicket and http.get version', () => {
    ticketService.customerTicket();
    expect(localStorageService.getCustomerTicket).toHaveBeenCalled();
    expect(http.get).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/version', requestOptions);
  });

  it('should call http.get version', () => {
    ticketService.version();
    expect(http.get).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/version', requestOptions);
  });
});
