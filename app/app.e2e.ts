describe('MyApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Sozialhilfe Rechner');
  });

  it('should have <nav>', () => {
    expect(element(by.css('ion-navbar')).isPresent()).toEqual(true);
  });

  /*it('should have correct nav text for Home', () => {
    expect(element(by.css('ion-navbar:first-child')).getText()).toContain('Sozialhilfe Rechner');
  });*/

  it('has a menu button that displays the left menu', () => {
    element(by.css('.bar-button-menutoggle')).click()
      .then(() => {
        browser.driver.sleep(2000); // wait for the animation
        expect(element.all(by.css('.toolbar-title')).first().getText()).toEqual('Menü');
      });
  });

  it('the left menu has a link with title Sozialhilfe Rechner', () => {
    element(by.css('.bar-button-menutoggle')).click()
      .then(() => {
        browser.driver.sleep(2000); // wait for the animation
        expect(element.all(by.css('ion-label')).first().getText()).toEqual('Sozialhilfe Rechner');
      });
  });

});
