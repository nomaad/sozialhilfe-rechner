import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


// TODO: Refactor and put models into separate folder, each model 1 file
export class Case {
  household: Household;
  assets: Assets;
  income: Income;
  
  constructor() {
    this.household = new Household();
    this.assets = new Assets();
    this.income = new Income();
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

  isSizeValid(){
    if(this.singleHousehold == 1){
      this.householdSize = 1;
      return true;
    }
    return false;
  }
}

export class Income {
  hasJobIncome: number;
  jobIncomeValue: number;
  hasSocialIncome: number;
  socialIncomeValue: number;

  isJobIncomeValid(){
    return this.hasJobIncome == 0 || (this.hasJobIncome == 1 && this.jobIncomeValue > 0);
  }

  isSocialIncomeValid(){
    return this.hasSocialIncome == 0 || (this.hasSocialIncome == 1 && this.socialIncomeValue > 0);
  }

  isValid(){
    return this.isJobIncomeValid() && this.isSocialIncomeValid();
  }
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

