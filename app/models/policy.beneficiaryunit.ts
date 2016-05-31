'use strict';

import { Household, Age, Relationship } from './household';
import {BeneficiaryUnitBehaviour} from './policy.interfaces';

let skos2016BeneficiaryUnitBehaviour = function(h: Household): number {
    if(h.adults == 1) {
        return Number(h.adults) + Number(h.kids);
    }
    else{
        if(h.relationship == null){
            throw Error("relationship needs to be set, when 2 adults live together");
        }
        else{
            if(h.relationship == Relationship.Married){
                return 2 + Number(h.kids);
            }
            else{
                if(h.adults > 2 && h.flatshare == null){
                    throw Error("flatshare type needs to be set, when more than 2 adults live together");
                }
                return 1 + Number(h.kids);
            }
        }
    }
};

export { skos2016BeneficiaryUnitBehaviour };