import {Injectable} from '@angular/core';
import               'rxjs/add/operator/map';
import {PolicyInterface}      from '../models/policy.interfaces';
import {Skos2016Policy}      from '../models/policy.skos2016';
import {Household} from "../models/household";

@Injectable()
export class CaseService {

  private household: Household;
  private policy: PolicyInterface;

  constructor() {
    this.household = new Household();
    this.policy = new Skos2016Policy();

    //*
    this.household.age = 2;
    this.household.adults = 1;
    this.household.kids = 2;
    this.household.relationship = 2;
    this.household.accommodation.rentValue = 1600;
    this.household.healthcare.kvg = 800;
    this.household.income.jobIncomeValue = 1200;
    //*/
  }

  getHousehold(){
    return this.household;
  }
  
  getPolicy(){
    return this.policy;
  }
}

