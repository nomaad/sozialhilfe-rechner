import {Page, NavController} from 'ionic-angular';
import {HaushaltPage} from '../haushalt/haushalt';


@Page({
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
        this.nav.push(HaushaltPage);
  }
}


