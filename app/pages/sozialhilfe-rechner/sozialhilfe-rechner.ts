import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HouseholdPage} from '../household/household';
import {ResultPage} from '../result/result';


@Component({
  templateUrl: 'build/pages/sozialhilfe-rechner/sozialhilfe-rechner.html'
})
export class SozialhilfeRechnerPage {
  /*static get parameters() {
      return [[NavController], [NavParams]];
  }*/

  constructor(private nav: NavController)  {
      //this.nav = nav;
  }

  startSozialhilfeRechner(event) {
        //this.nav.push(ResultPage);
        this.nav.push(HouseholdPage);
  }
}


