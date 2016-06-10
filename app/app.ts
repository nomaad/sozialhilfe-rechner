'use strict';

import { Component, Type, ViewChild }                     from '@angular/core';
import { Platform, ionicBootstrap, MenuController, Nav }  from 'ionic-angular';
import { StatusBar }                                      from 'ionic-native';
import { SozialhilfeRechnerPage }                         from './pages/sozialhilfe-rechner/sozialhilfe-rechner';
import { ListPage }                                       from './pages/list/list';
import { ClickerList }                                    from './pages/clickerList/clickerList';
import { Page2 }                                          from './pages/page2/page2';
import { CaseService }                                    from './services/case.service.ts';
import { Dumper }                                         from './components/dumper/dumper';
import {ResultPage}                                       from "./pages/result/result";

@Component({
  templateUrl: 'build/app.html',
  //TODO: Remove? config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [CaseService],
  directives: [Dumper],
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {
  @ViewChild(Nav) private nav: Nav;

  private rootPage: Type;
  private pages: Array<{title: string, component: Type}>;
  private menu: MenuController;
  private platform: Platform;

  constructor(platform: Platform, menu: MenuController) {

    this.platform = platform;
    this.menu = menu;

    this.rootPage = SozialhilfeRechnerPage;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Sozialhilfe Rechner', component: SozialhilfeRechnerPage },
      { title: 'List', component: ListPage },
      { title: 'Clickers', component: ClickerList },
      { title: 'Goodbye Ionic', component: Page2 },
      { title: 'Budget', component: ResultPage },
    ];
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  public openPage(page: any): void {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  };
}

// Pass the main app component as the first argument
// Pass any providers for your app in the second argument
// Set any config for your app as the third argument:
// http://ionicframework.com/docs/v2/api/config/Config/

ionicBootstrap(MyApp, [], 
  {
    platforms: {
      ios: {
        statusbarPadding: true
      }
    }
  });
