import {Page, NavController} from 'ionic-angular';
import {CaseService} from '../../services/case.service.ts';
import {Household} from '../../models/household.ts';
import {AccommodationPage} from '../accommodation/accommodation';
import {PolicyInterface} from "../../models/policy.interfaces";
import {MessagePage} from "../message/message";

@Page({
  templateUrl: 'build/pages/healthcare/healthcare.html',
})
export class HealthcarePage {
  household: Household;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService, private policy: PolicyInterface){
    this.nav = nav;
    this.household = caseService.getHousehold();
    this.policy = policy;
  }

  next(event) {
    let r = this.policy.getHealthcareResult(this.household);
    if(r.exceeded){
      this.nav.push(MessagePage, {
        result: r,
        next: AccommodationPage
      });
    }
    else{
      this.nav.push(AccommodationPage);
    }
  }
}