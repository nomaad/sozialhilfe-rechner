'use strict';

import { Household, Age, Relationship } from './household';
import {HealthcareResult} from './policy.interfaces';

// GED 2016
let healthcareBehaviourBernCity = function(h: Household): HealthcareResult {
    
    // TODO: Implement different regions for canton Bern
    // TODO: Implement young adults
    let r = new HealthcareResult();
    r.allowableHealthcare = Number(h.adults) * 480 + Number(h.kids) * 109.30; //TODO: + Number(h.youngadults) * 449.50
    r.actualHealthcare = Number(h.healthcare.kvg);

    // TODO: remove?
    if(r.actualHealthcare > r.allowableHealthcare){
        r.message = "KVG zu hoch";
        r.exceeded = true;
    }
    return r;
};

export { healthcareBehaviourBernCity };