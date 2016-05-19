import {Page, NavController} from 'ionic-angular';
import {CaseService, Case} from '../../services/case.service';
import {WealthPage} from '../wealth/wealth';


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
    this.nav.push(WealthPage);
  }
}