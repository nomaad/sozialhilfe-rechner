import {Page, NavController} from 'ionic-angular';
import {CaseService} from '../../services/case.service.ts';
import {Household} from '../../models/household.ts';
import {DeptPage} from "../dept/dept";

@Page({
  templateUrl: 'build/pages/assets/assets.html',
})
export class AssetsPage {
  household: Household;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.household = caseService.getHousehold();
  }


  // TODO: Blocks machen. zB age-block. dieser ist valid, wenn über 25 oder wenn unter und ausbildungsstatus erfasst wurde
  //Im age-block gibt es also alters-select, sowie 1-2 controls zu erstausbildungssituation
  
  showNext(){
    return false;
  }

  next(event) {
    this.nav.push(DeptPage);
  }
}