import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';


export class Case {
  household: Household;
  wealth: Wealth;
  hasJobIncome: number;
  hasOtherIncome: number;

  
  constructor() {
    this.household = new Household();
    this.wealth = new Wealth();
  }

  incomeComplete(){
    if (this.hasJobIncome == 0 && this.hasOtherIncome == 0){
      return true;
    }
    return false;
  }
  /*
   avatarUrl(size: number = 100): string {
   return `http://www.gravatar.com/avatar/${this.hash}?d=retro&s=${size}`
   }
   }*/
}

export class Household {
  singleHousehold: number;
  householdSize: number;
  age: string;
}

export class Wealth{
  hasWealth: number;
  wealth: number;
  hasVehicle: number;
  vehicleValue: number;

  isWealthValid(){
    return this.hasWealth == 0 || (this.hasWealth == 1 && this.wealth > 0);
  }

  isVehicleValid(){
    return this.hasVehicle == 0 || (this.hasVehicle == 1 && this.vehicleValue > 0);
  }

  isValid(){
    return this.isWealthValid() && this.isVehicleValid();
  }
}

@Injectable()
export class CaseService {
  case: Case;

  constructor() {
    this.case = new Case()
  }

  getCase(){
    return this.case;
  }
}

