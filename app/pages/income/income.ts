import {Page, NavController} from 'ionic-angular';
import {CaseService, Case} from '../../providers/case.service';
import {AssetsPage} from '../assets/assets';


@Page({
  templateUrl: 'build/pages/income/income.html',
})
export class IncomePage {
  case: Case;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.case = caseService.getCase();
  }

  next(event) {
    this.nav.push(AssetsPage);
  }
}