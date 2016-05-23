'use strict';

import { Household, Age, Relationship } from './household';

// A policy contains rules that are applied to a case (policy = SKOS-Richtlinien)
export interface PolicyInterface {

    subsistence: Array<number>; //Grundbedarf
    houseRentLimits?: Array<number>; // Mietzinslimiten, [0] = 950
    healthInsuranceLimit?: number; // KVG Limite 4

    assetLimitSingle: number;
    assetLimitCouple: number;
    assetLimitChild: number;
    assetLimitTotal: number;

    getBeneficiaryUnitSize(household: Household): number;
    getSubsistence(household: Household): number;

}
// Implementation based on http://skos.ch/uploads/media/2016_SKOS-Richtlinien-komplett-d.pdf
export class Skos2016Policy implements PolicyInterface {

    subsistence: Array<number>; //Grundbedarf
    houseRentLimits: Array<number>; // Mietzinslimiten, [0] = 950
    healthInsuranceLimit: number; // KVG Limite 4

    assetLimitSingle: number;
    assetLimitCouple: number;
    assetLimitChild: number;
    assetLimitTotal: number;

    constructor(){
        this.subsistence = [986, 1509, 1834, 2110, 2386, 2586, 2786, 2986, 3186, 3386];
        this.assetLimitSingle = 4000;
        this.assetLimitCouple = 8000;
        this.assetLimitChild  = 2000;
        this.assetLimitTotal = 10000;
    }

    // TODO: probably belongs to policy.. because household should not contain any logic. It should only hold the values about how much people live there. The policy defines then, what is considered as size etc.
    public getBeneficiaryUnitSize(h: Household): number {
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
    }

    public getSubsistence(h: Household): number {
        if(h.age > Age.Age18to25) {
            return this.subsistence[this.getBeneficiaryUnitSize(h) - 1];
        }
        else{
            throw new Error("not implemented");
        }
    }
    
}