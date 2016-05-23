import {Page, NavController} from 'ionic-angular';
import {CaseService} from '../../services/case.service.ts';
import {Case} from '../../models/case.ts';

@Page({
  templateUrl: 'build/pages/assets/assets.html',
})
export class AssetsPage {
  case: Case;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.case = caseService.getCase();
  }


  // Blocks machen. zB age-block. dieser ist valid, wenn über 25 oder wenn unter und ausbildungsstatus erfasst wurde
  //Im age-block gibt es also alters-select, sowie 1-2 controls zu erstausbildungssituation
  
  showNext(){
    return false;
  }

  next(event) {
    //this.nav.push(EinkommenPage);
  }
}