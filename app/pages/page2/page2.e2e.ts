import { ElementFinder } from 'protractor';

let message: ElementFinder = element(by.className('message'));

describe('Page2', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have correct text when Goodbye Ionic is selected', () => {
    element(by.css('.bar-button-menutoggle')).click().then(() => {
      browser.driver.sleep(2000); // wait for the animation
      element.all(by.className('input-wrapper')).then((items) => {
        items[3].click();
        expect(message.getText()).toEqual('Bye!');
      });
    });
  });
});
