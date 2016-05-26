import {Page, NavController} from 'ionic-angular';
import {CaseService} from '../../services/case.service.ts';
import {Household} from '../../models/household.ts';
import {AccommodationPage} from '../accommodation/accommodation';

@Page({
  templateUrl: 'build/pages/healthcare/healthcare.html',
})
export class HealthcarePage {
  household: Household;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.household = caseService.getHousehold();
  }

  next(event) {
    this.nav.push(AccommodationPage);
  }
}