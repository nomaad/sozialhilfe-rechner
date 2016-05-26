import {Page, NavController} from 'ionic-angular';
import {CaseService} from '../../services/case.service.ts';
import {Household} from '../../models/household.ts';

@Page({
  templateUrl: 'build/pages/dept/dept.html',
})
export class DeptPage {
  household: Household;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.household = caseService.getHousehold();
  }

  showNext(){
    return false;
  }

  next(event) {
    //this.nav.push(EinkommenPage);
  }
}