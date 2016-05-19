import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';


export class Case {
  household: Household;
  assets: Assets;
  hasJobIncome: number;
  hasOtherIncome: number;

  
  constructor() {
    this.household = new Household();
    this.assets = new Assets();
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

export class Assets{
  hasAssets: number;
  assetValue: number;
  hasVehicle: number;
  vehicleValue: number;

  isAssetsValid(){
    return this.hasAssets == 0 || (this.hasAssets == 1 && this.assetValue > 0);
  }

  isVehicleValid(){
    return this.hasVehicle == 0 || (this.hasVehicle == 1 && this.vehicleValue > 0);
  }

  isValid(){
    return this.isAssetsValid() && this.isVehicleValid();
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

