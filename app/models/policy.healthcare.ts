'use strict';

import { Household, Age, Relationship } from './household';
import {HealthcareResult} from './policy.interfaces';

let genericHealthcareBehaviour = function(h: Household): HealthcareResult {
    let r = new HealthcareResult(400, 100);
    r.allowableHealthcare = h.adults * r.kvgLimitAdults + h.kids * r.kvgLimitKids;
    r.actualHealthcare = h.healthcare.kvg;

    if(r.allowableHealthcare > r.actualHealthcare){
        r.message = "KVG zu hoch";
        r.exceeded = true;
    }
    return r;
};

export { genericHealthcareBehaviour };