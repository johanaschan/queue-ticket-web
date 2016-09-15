import { QueueTicketWebPage } from './app.po';

describe('queue-ticket-web App', function() {
  let page: QueueTicketWebPage;

  beforeEach(() => {
    page = new QueueTicketWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
