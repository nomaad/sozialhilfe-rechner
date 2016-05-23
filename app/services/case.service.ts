import {Injectable} from '@angular/core';
import               'rxjs/add/operator/map';
import {Case}      from '../models/case';
import {PolicyInterface, Skos2016Policy}      from '../models/policy';

@Injectable()
export class CaseService {

  private case: Case;
  private policy: PolicyInterface;

  constructor() {
    this.case = new Case();
    this.policy = new Skos2016Policy();

  }

  getCase(){
    return this.case;
  }


}

