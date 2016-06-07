import {Page, NavController, NavParams} from 'ionic-angular';
import {CaseService} from '../../services/case.service.ts';
import {Household} from '../../models/household.ts';
import {AccommodationPage} from '../accommodation/accommodation';
import {PolicyInterface, HealthcareResult} from "../../models/policy.interfaces";

@Page({
  templateUrl: 'build/pages/healthcare/message.html',
})
export class MessagePage {
  household: Household;
  policy: PolicyInterface;
  params: NavParams;
  m: HealthcareResult;

  static get parameters() {
    return [[NavController], [NavParams], [CaseService]];
  }

  constructor(private nav: NavController, private navParams: NavParams, private caseService: CaseService){
    this.nav = nav;
    this.params = navParams;
    this.m = navParams.get('result');
  }

  next(event) {
    this.nav.push(this.params.get('next'));
  }
}