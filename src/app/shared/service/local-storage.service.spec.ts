import { LocalStorageService } from './.';
import { Ticket } from '../';

describe('LocalStorageService', () => {

  let localStorageService;

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(localStorage, 'setItem');
    localStorageService = new LocalStorageService();
  });

  it('should call localStorage.getItem', () => {
    localStorageService.getCustomerTicket();
    expect(localStorage.getItem).toHaveBeenCalledWith(localStorageService.customerKey);
  });

  it('should call localStorage.setItem', () => {
    const ticket = new Ticket(1, 1, 1);
    localStorageService.setCustomerTicket(ticket);
    expect(localStorage.setItem).toHaveBeenCalledWith(localStorageService.customerKey, JSON.stringify(ticket));
  });

});
