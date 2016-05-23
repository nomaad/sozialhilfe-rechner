import {Page, NavController} from 'ionic-angular';
import {IncomePage} from '../income/income';
import {CaseService} from '../../services/case.service.ts';
import {Case} from '../../models/case.ts';

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

  showNext(){
    return this.validAge() && this.case.household.isSizeValid();
  }

  next(event) {
      this.nav.push(IncomePage);
  }
}
