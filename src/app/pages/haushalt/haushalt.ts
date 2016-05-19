import {Page, NavController} from 'ionic-angular';
import {IncomePage} from '../income/income';
import {CaseService, Case} from '../../services/case.service';

@Page({
  templateUrl: 'build/pages/haushalt/haushalt.html',
})
export class HaushaltPage {
  case: Case;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.case = caseService.getCase();
  }

  validAge(){
    return (this.case.age != null && this.case.age > 1);
  }

  validHouseholdSize(){
    if(this.case.singleHousehold == 1){
      this.case.householdSize = 1;
      return true;
    }
    return false;
  }

  showNext(){
    return this.validAge() && this.validHouseholdSize();
  }

  next(event) {
      this.nav.push(IncomePage);
  }
}
