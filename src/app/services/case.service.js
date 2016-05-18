import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Case} from '../models/case.model';
/*
 Generated class for the Case provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class CaseService {
  constructor() {
    this.case = new Case()
  }

  getCase(){
    return this.case;
  }
}

