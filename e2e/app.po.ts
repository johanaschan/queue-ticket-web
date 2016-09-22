import { browser, element, by } from 'protractor/globals';

export class QueueTicketWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }
}
