import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CaseService} from '../../services/case.service.ts';
import {Household} from '../../models/household.ts';
import {AssetsPage} from '../assets/assets';


@Component({
  templateUrl: 'build/pages/income/income.html',
})
export class IncomePage {
  household: Household;

  static get parameters() {
    return [[NavController], [CaseService]];
  }

  constructor(private nav: NavController, private caseService: CaseService){
    this.nav = nav;
    this.household = caseService.getHousehold();
  }

  next(event) {
    this.nav.push(AssetsPage);
  }
}