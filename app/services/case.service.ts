import {Injectable} from '@angular/core';
import               'rxjs/add/operator/map';
import {PolicyInterface, Skos2016Policy}      from '../models/policy';
import {Household} from "../models/household";

@Injectable()
export class CaseService {

  private household: Household;
  private policy: PolicyInterface;

  constructor() {
    this.household = new Household();
    this.policy = new Skos2016Policy();

  }

  getHousehold(){
    return this.household;
  }
}

