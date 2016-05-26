import {Page, NavController} from 'ionic-angular';
import {CaseService} from '../../services/case.service.ts';
import {Household} from '../../models/household.ts';

@Page({
  templateUrl: 'build/pages/accommodation/accommodation.html',
})
export class AccommodationPage {
  household: Household;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.household = caseService.getHousehold();
  }

  next(event) {
    //this.nav.push(EinkommenPage);
  }
}