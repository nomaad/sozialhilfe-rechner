import {Page, NavController, NavParams} from 'ionic-angular';
import {HaushaltPage} from '../haushalt/haushalt';


@Page({
  templateUrl: 'build/pages/sozialhilfe-rechner/sozialhilfe-rechner.html'
});
export class SozialhilfeRechner {
  static get parameters() {
      return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
      this.nav = nav;
  }

  startSozialhilfeRechner(event) {
        this.nav.push(HaushaltPage);
  }
}


