import {Observable} from 'rxjs';

import {TicketService} from './';

describe('TicketService', () => {

  let ticketService;
  let http;
  let localStorageService;

  beforeEach(() => {
    http = jasmine.createSpyObj('http', ['get', 'delete', 'post']);
    http.get.and.returnValue(Observable.empty());
    http.delete.and.returnValue(Observable.empty());
    http.post.and.returnValue(Observable.empty());
    localStorageService = jasmine.createSpyObj('localStorageService', ['getCustomerTicket', 'setCustomerTicket']);
    ticketService = new TicketService(http, localStorageService);
  });

  it('should call http.get current', () => {
    ticketService.currentTicket();
    expect(http.get).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/current');
  });

  it('should call http.post next', () => {
    ticketService.nextTicket();
    expect(http.post).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/next', null);
  });

  it('should call http.get new', () => {
    ticketService.newTicket();
    expect(http.get).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/new');
  });

  it('should call http.delete drop', () => {
    const ticketNumber = 10;
    ticketService.dropTicket(ticketNumber);
    expect(http.delete).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/drop/' + ticketNumber);
  });

  it('should call http.get ticketstatus', () => {
    const ticketNumber = 10;
    ticketService.ticketStatus(ticketNumber);
    expect(http.get).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/ticketstatus/' + ticketNumber);
  });

  it('should call http.delete reset', () => {
    ticketService.resetTickets();
    expect(http.delete).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/reset');
  });

  it('should call http.get reset', () => {
    ticketService.size();
    expect(http.get).toHaveBeenCalledWith(ticketService.queueTicketApiUrl + '/tickets/size');
  });

  it('should call localStorageService.getCustomerTicket', () => {
    ticketService.customerTicket();
    expect(localStorageService.getCustomerTicket).toHaveBeenCalled();
  });
});
