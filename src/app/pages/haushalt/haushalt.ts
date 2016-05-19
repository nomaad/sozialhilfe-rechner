import {Page, NavController} from 'ionic-angular';
import {EinkommenPage} from '../einkommen/einkommen';
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
    return (this.case.household.age != null && this.case.household.age > 1);
  }

  validHouseholdSize(){
    if(this.case.household.singleHousehold == 1){
      this.case.household.householdSize = 1;
      return true;
    }
    return false;
  }


// Blocks machen. zB age-block. dieser ist valid, wenn über 25 oder wenn unter und ausbildungsstatus erfasst wurde
  //Im age-block gibt es also alters-select, sowie 1-2 controls zu erstausbildungssituation

  showNext(){
    return this.validAge() && this.validHouseholdSize();
  }

  next(event) {
      this.nav.push(EinkommenPage);
  }
}
