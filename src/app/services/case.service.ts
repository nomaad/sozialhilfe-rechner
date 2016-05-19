import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';


export class Case {
  singleHousehold: number;
  householdSize: number;
  age: string;
  hasJobIncome: number;
  hasOtherIncome: number;
  hasWealth: number;
  wealth: number;
  hasVehicle: number;
  vehicleValue: number;
  
  constructor() {

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

