import { QueueTicketWebPage } from './app.po';

describe('queue-ticket-web App', function() {
  let page: QueueTicketWebPage;

  beforeEach(() => {
    page = new QueueTicketWebPage();
  });

  it('should display header QueueTicket', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('QueueTicket');
  });
});
