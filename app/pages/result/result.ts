import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CaseService} from '../../services/case.service.ts';
import {Household} from '../../models/household.ts';
import {Skos2016Policy} from "../../models/policy.skos2016";
import {PolicyInterface, WelfareResult} from "../../models/policy.interfaces";

@Component({
  templateUrl: 'build/pages/result/result.html',
})
export class ResultPage {
  household: Household;
  policy: PolicyInterface;
  result: WelfareResult;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.household = caseService.getHousehold();
    this.policy = new Skos2016Policy();
    this.result = this.policy.getWelfareResult(this.household);
  }

  next(event) {
    //this.nav.push(EinkommenPage);
  }
}