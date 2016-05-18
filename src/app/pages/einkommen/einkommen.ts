import {Page, NavController} from 'ionic-angular';
import {CaseService, Case} from '../../services/case.service';

/*
  Generated class for the EinkommenPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/einkommen/einkommen.html',
})
export class EinkommenPage {
  case: Case;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.case = caseService.getCase();
  }

  showOtherIncome(){
    return this.case.hasJobIncome == 0;
  }

  showNext(){
    return (this.case.incomeComplete());
  }

  next(event) {
    this.nav.pop();
  }
}