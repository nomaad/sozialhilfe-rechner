import {Page, NavController} from 'ionic-angular';
import {EinkommenPage} from '../einkommen/einkommen';
import {CaseService} from '../../services/case.service';
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
    return [[NavController], [CaseService]];
  }

  constructor(nav, caseService) {
    this.nav = nav;
    this.case = caseService.getCase();
  }

  gotoIncome(event) {
      this.nav.push(EinkommenPage);
  }
}
