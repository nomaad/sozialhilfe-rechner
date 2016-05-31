'use strict';

import { Household, Age, Relationship } from './household';
import {HealthcareResult} from './policy.interfaces';

let genericHealthcareBehaviour = function(h: Household): HealthcareResult {
    let r = new HealthcareResult();
    r.allowableHealthcare = h.adults * 400 + h.kids * 100;
    r.actualHealthcare = h.healthcare.kvg;

    if(r.allowableHealthcare > r.actualHealthcare){
        r.message = "KVG zu hoch";
        r.exceeded = true;
    }
    return r;
};

export { genericHealthcareBehaviour };