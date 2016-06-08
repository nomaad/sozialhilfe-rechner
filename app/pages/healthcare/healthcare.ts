import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CaseService} from '../../services/case.service.ts';
import {Household} from '../../models/household.ts';
import {AccommodationPage} from '../accommodation/accommodation';
import {PolicyInterface} from "../../models/policy.interfaces";
import {MessagePage} from "../message/message";

@Component({
  templateUrl: 'build/pages/healthcare/healthcare.html',
})
export class HealthcarePage {
  household: Household;
  policy: PolicyInterface;
  
  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.household = caseService.getHousehold();
    this.policy = caseService.getPolicy();
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