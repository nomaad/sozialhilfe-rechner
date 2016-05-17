import {Page, NavController} from 'ionic-angular';
import {EinkommenPage} from '../einkommen/einkommen';

/*
  Generated class for the HaushaltPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/haushalt/haushalt.html',
})
export class HaushaltPage {

  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  gotoIncome(event) {
      this.nav.push(EinkommenPage);
  }
}
