import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {SozialhilfeRechner} from './pages/sozialhilfe-rechner/sozialhilfe-rechner';
import {ListPage} from './pages/list/list';
import {CaseService} from './services/case.service';


@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [CaseService]
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform], [MenuController]];
  }

  constructor(app, platform, menu, caseService) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.menu = menu;
    this.caseService = caseService;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Sozialhilfe Rechner', component: SozialhilfeRechner },
      { title: 'My First List', component: ListPage }
    ];

    // make SozialhilfeRechner the root (or first) page
    this.rootPage = SozialhilfeRechner;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
  })
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
