'use strict';

import { Household, Age, Relationship } from './household';
import {HealthcareResult} from './policy.interfaces';

let genericHealthcareBehaviour = function(h: Household): HealthcareResult {
    let r = new HealthcareResult(400, 100);
    r.allowableHealthcare = Number(h.adults) * Number(r.kvgLimitAdults) + Number(h.kids) * Number(r.kvgLimitKids);
    r.actualHealthcare = Number(h.healthcare.kvg);

    if(r.actualHealthcare > r.allowableHealthcare){
        r.message = "KVG zu hoch";
        r.exceeded = true;
    }
    return r;
};

export { genericHealthcareBehaviour };