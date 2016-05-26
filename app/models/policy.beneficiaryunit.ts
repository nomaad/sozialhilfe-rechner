'use strict';

import { Household, Age, Relationship } from './household';
import {GetBeneficiaryUnit} from './policy.interfaces';

let getSkos2016BeneficiaryUnit = function(h: Household): number {
    if(h.adults == 1) {
        return h.adults + h.kids;
    }
    else{
        if(h.relationship == null){
            throw Error("relationship needs to be set, when 2 adults live together");
        }
        else{
            if(h.relationship == Relationship.Married){
                return 2 + h.kids;
            }
            else{
                if(h.adults > 2 && h.flatshare == null){
                    throw Error("flatshare type needs to be set, when more than 2 adults live together");
                }
                return 1 + h.kids;
            }
        }
    }
};

export { getSkos2016BeneficiaryUnit };