import { ElementFinder } from 'protractor';

let clickerField: ElementFinder = element(by.css('.text-input'));
let clickerButton: ElementFinder = element.all(by.className('button-outline')).first();
let removeButton: ElementFinder = element.all(by.css('.button-outline-danger')).first();
let firstClicker: ElementFinder = element.all(by.className('clickerList')).first();
let message: ElementFinder = element(by.className('message'));

describe('ClickerList', () => {

  beforeEach(() => {
    browser.get('');
  });

  /*it('should switch into sozialhilfe rechner page from menu', () => {
    element(by.css('.bar-button-menutoggle')).click();
    expect(element.all(by.css('.toolbar-title')).last().getText()).toEqual('');
  });*/

  it('has an input box for new Clickers', () => {
    element(by.css('.bar-button-menutoggle')).click().then(() => {
      browser.driver.sleep(2000); // wait for the animation
      element.all(by.className('input-wrapper')).then((items) => {
        items[2].click();
        expect(element(by.css('.text-input')).isPresent()).toEqual(true);
      });
    });
  });

  it('should add a Clicker', () => {
    element(by.css('.bar-button-menutoggle')).click().then(() => {
      browser.driver.sleep(2000); // wait for the animation
      element.all(by.className('input-wrapper')).then((items) => {
        items[2].click();
        'test clicker one'.split('').forEach((c) => clickerField.sendKeys(c));
        clickerButton.click();
        browser.driver.sleep(1000);
        expect(firstClicker.getText()).toEqual('TEST CLICKER ONE (0)');
      });
    });
  });

  it('should click a Clicker', () => {
    element(by.css('.bar-button-menutoggle')).click().then(() => {
      browser.driver.sleep(2000); // wait for the animation
      element.all(by.className('input-wrapper')).then((items) => {
        items[2].click();

        'test clicker one'.split('').forEach((c) => clickerField.sendKeys(c));
        clickerButton.click();
        browser.driver.sleep(1000);
        //expect(firstClicker.getText()).toEqual('TEST CLICKER ONE (0)');

        firstClicker.click();
        browser.driver.sleep(1000);
        expect(firstClicker.getText()).toEqual('TEST CLICKER ONE (1)');
      });
    });
  });

  it('should delete a Clicker', () => {
    element(by.css('.bar-button-menutoggle')).click().then(() => {
      browser.driver.sleep(2000); // wait for the animation
      element.all(by.className('input-wrapper')).then((items) => {
        items[2].click();

        'test clicker one'.split('').forEach((c) => clickerField.sendKeys(c));
        clickerButton.click();
        browser.driver.sleep(1000);

        removeButton.click();
        browser.driver.sleep(1000);
        element.all(by.className('clickerList')).count()
            .then((count) => expect(count).toEqual(2));
      });
    });
  });
});
