'use strict';

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Clickers }            from '../../services/clickers';
import { ClickerButton }       from '../../components/clickerButton/clickerButton';
import { ClickerForm }         from '../../components/clickerForm/clickerForm';

@Component({
  templateUrl: 'build/pages/clickerList/clickerList.html',
  providers: [Clickers],
  directives: [ClickerButton, ClickerForm],
})

export class ClickerList {

  private clickerService: Clickers;
  private nav: NavController;
  private title: string;

  constructor(nav: NavController, clickerService: Clickers) {
    this.nav = nav;
    this.clickerService = clickerService;
    this.title = 'Clickers';
  }
}
