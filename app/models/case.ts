'use strict';

import { Household } from './household'
import { Income }    from './income'
import { Assets }    from './assets'

export class Case {
    household: Household;
    assets: Assets;
    income: Income;

    constructor() {
        this.household = new Household();
        this.assets = new Assets();
        this.income = new Income();
    }

    isValid(){
        // TODO: check if all data is valid
        return this.household.isSizeValid() &&
            this.income.isValid() &&
            this.assets.isValid();
    }

    /*
     avatarUrl(size: number = 100): string {
     return `http://www.gravatar.com/avatar/${this.hash}?d=retro&s=${size}`
     }
     }*/
}