import {Injectable} from '@angular/core';
import               'rxjs/add/operator/map';
import {PolicyInterface}      from '../models/policy.interfaces';
import {Skos2016Policy}      from '../models/policy.skos2016';
import {Household} from "../models/household";

@Injectable()
export class CaseService {

  private household: Household;

  constructor() {
    this.household = new Household();
  }

  getHousehold(){
    return this.household;
  }
}

