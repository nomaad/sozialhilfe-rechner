import { ADDITIONAL_TEST_BROWSER_PROVIDERS, TEST_BROWSER_STATIC_PLATFORM_PROVIDERS } from '@angular/platform-browser/testing/browser_static';
import { BROWSER_APP_DYNAMIC_PROVIDERS }                from '@angular/platform-browser-dynamic';
import { resetBaseTestProviders, setBaseTestProviders } from '@angular/core/testing';
import { MyApp }                                        from './app';
import { ListPage }                                     from './pages/list/list';

resetBaseTestProviders();
setBaseTestProviders(
  TEST_BROWSER_STATIC_PLATFORM_PROVIDERS,
  [
    BROWSER_APP_DYNAMIC_PROVIDERS,
    ADDITIONAL_TEST_BROWSER_PROVIDERS,
  ]
);

let clickerApp: MyApp = null;

class MockClass {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }

  public close(): any {
    return true;
  }

  public setRoot(): any {
    return true;
  }
}

describe('ClickerApp', () => {

  beforeEach(() => {
    let mockClass: any = (<any>new MockClass());
    clickerApp = new MyApp(mockClass, mockClass);
  });

  it('initialises with 5 possible pages', () => {
    expect(clickerApp['pages'].length).toEqual(5);
  });

  it('initialises with a root page', () => {
    expect(clickerApp['rootPage']).not.toBe(null);
  });

  it('initialises with an app', () => {
    expect(clickerApp['app']).not.toBe(null);
  });

  it('opens a page', () => {
    spyOn(clickerApp['menu'], 'close');
    // cant be bothered to set up DOM testing for app.ts to get access to @ViewChild (Nav)
    clickerApp['nav'] = (<any>clickerApp['menu']);
    spyOn(clickerApp['nav'], 'setRoot');
    clickerApp.openPage(clickerApp['pages'][1]);
    expect(clickerApp['menu']['close']).toHaveBeenCalled();
    expect(clickerApp['nav'].setRoot).toHaveBeenCalledWith(ListPage);
  });
});
