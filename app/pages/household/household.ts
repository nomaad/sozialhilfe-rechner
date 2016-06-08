import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {IncomePage} from '../income/income';
import {CaseService} from '../../services/case.service.ts';
import {Household} from '../../models/household.ts';

@Component({
  templateUrl: 'build/pages/household/household.html',
})
export class HouseholdPage {
  household: Household;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.household = caseService.getHousehold();
  }

  validAge(){
    return (this.household.age != null && this.household.age > 1);
  }

  showNext(){
    return this.validAge() && this.household.isSizeValid();
  }

  next(event) {
      this.nav.push(IncomePage);
  }
}
