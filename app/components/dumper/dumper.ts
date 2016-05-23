import {Component} from '@angular/core';
import {CaseService} from '../../services/case.service.ts';
import {Case} from '../../models/case.ts';


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
  case: Case;
  
  constructor(private caseService: CaseService ) {
    this.case = caseService.getCase();
  }
}
