import {ViewChild} from '@angular/core';
import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {SozialhilfeRechnerPage} from './pages/sozialhilfe-rechner/sozialhilfe-rechner';
import {ListPage} from './pages/list/list';
import {CaseService} from './providers/case.service';
import { Dumper }       from './components/dumper/dumper';


@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [CaseService],
  directives: [Dumper],
  queries: {
    nav: new ViewChild('content')
  }
})
class MyApp {
  rootPage: any = SozialhilfeRechnerPage;
  pages: Array<{title: string, component: any}>

  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sozialhilfe Rechner', component: SozialhilfeRechnerPage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //let nav = this.app.getComponent('nav');
    this.nav.setRoot(page.component);
  }
}
