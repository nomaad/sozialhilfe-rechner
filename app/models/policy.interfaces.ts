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

    getBeneficiaryUnit: GetBeneficiaryUnit;
    getSubsistence(household: Household): number;

}

// Behaviour that calculates beneficiary unit based on a household
export interface GetBeneficiaryUnit {
    (household: Household): number;
}