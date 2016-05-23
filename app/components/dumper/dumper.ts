import {Component} from '@angular/core';
import {CaseService} from '../../services/case.service.ts';
import {Household} from "../../models/household";


/*
  Generated class for the Dumper component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'dumper',
  templateUrl: 'build/components/dumper/dumper.html',
})
export class Dumper {
  household: Household;
  
  constructor(private caseService: CaseService ) {
    this.household = caseService.getHousehold();
  }
}
