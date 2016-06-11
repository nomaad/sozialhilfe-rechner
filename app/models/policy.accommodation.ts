'use strict';

import { Household, Age, Relationship } from './household';
import {AccommodationResult} from './policy.interfaces';

// http://www.bern.ch/themen/gesundheit-alter-und-soziales/sozialhilfe/unterstuetzung/downloads-1/downloads/mietzins_internet110503.pdf
let accommodationBehaviourBernCity = function(h: Household): AccommodationResult {
    
    let r = new AccommodationResult();
    let maxValues: Array<number> = [];
    maxValues[1] = 900;
    maxValues[2] = 1200;
    maxValues[3] = 1400;
    maxValues[4] = 1600;
    maxValues[5] = 1800;
    maxValues[6] = 1850;
    maxValues[7] = 1900;
    maxValues[8] = 1950;
    maxValues[9] = 2000;
    maxValues[10] = 2050;
    
    r.actualRent = Number(h.accommodation.rentValue);
    r.allowableRent = maxValues[h.size()];

    if(r.actualRent > r.allowableRent){
        r.exceeded = true;
    }
    return r;
};

export { accommodationBehaviourBernCity };
