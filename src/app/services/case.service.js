import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';


export class Case {

  constructor() {
    this.singleHousehold = null;
    this.householdSize = 0;
    this.age = '';
  }
  /*
   avatarUrl(size: number = 100): string {
   return `http://www.gravatar.com/avatar/${this.hash}?d=retro&s=${size}`
   }
   }*/
}

@Injectable()
export class CaseService {
  constructor() {
    this.case = new Case()
  }

  getCase(){
    return this.case;
  }
}

