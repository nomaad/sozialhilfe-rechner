import {Page, NavController} from 'ionic-angular';
import {IncomePage} from '../income/income';
import {CaseService, Case} from '../../providers/case.service';

@Page({
  templateUrl: 'build/pages/household/household.html',
})
export class HouseholdPage {
  case: Case;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.case = caseService.getCase();
  }

  validAge(){
    return (this.case.household.age != null && this.case.household.age > 1);
  }

  validHouseholdSize(){
    if(this.case.household.singleHousehold == 1){
      this.case.household.householdSize = 1;
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
