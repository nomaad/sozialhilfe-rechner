'use strict';

import { Case } from './case';
import { Age, Relationship } from './household';

// A policy contains rules that are applied to a case (policy = SKOS-Richtlinien)
export interface PolicyInterface {

    subsistence: Array<number>; //Grundbedarf
    houseRentLimits?: Array<number>; // Mietzinslimiten, [0] = 950
    healthInsuranceLimit?: number; // KVG Limite 4

    assetLimitSingle: number;
    assetLimitCouple: number;
    assetLimitChild: number;
    assetLimitTotal: number;

    case: Case;

    getSubsistence(): number;

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

    case: Case;

    constructor(theCase: Case){
        this.subsistence = [986, 1509, 1834, 2110, 2386, 2586, 2786, 2986, 3186, 3386];
        this.assetLimitSingle = 4000;
        this.assetLimitCouple = 8000;
        this.assetLimitChild  = 2000;
        this.assetLimitTotal = 10000;
        this.case = theCase;
    }

    public getSubsistence(): number {
        if(this.case.household.age > Age.Age18to25) {
            return this.subsistence[this.case.household.getHouseholdSize() - 1];
        }
        else{
            throw new Error("not implemented");
        }
    }
}