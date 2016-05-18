import {Page, NavController} from 'ionic-angular';
import {EinkommenPage} from '../einkommen/einkommen';
import {CaseService, Case} from '../../services/case.service';
/*
  Generated class for the HaushaltPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
      this.nav.push(EinkommenPage);
  }
}
