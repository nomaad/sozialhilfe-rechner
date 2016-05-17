import {Page, NavController} from 'ionic-angular';
import {CaseService} from '../../services/case.service';

/*
  Generated class for the EinkommenPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/einkommen/einkommen.html',
});

export class EinkommenPage {
  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(nav, caseService) {
    this.nav = nav;
    this.case = caseService.getCase();
  }
}