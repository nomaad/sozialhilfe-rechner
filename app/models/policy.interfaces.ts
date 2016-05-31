'use strict';

import { Household, Age, Relationship } from './household';

export class WelfareResult {

    constructor(){
        this.healthcare = new HealthcareResult();
    }

    householdSize: number;
    unitSize: number;

    subsistence: number;
    actualRent: number;
    allowableRent: number;
    healthcare: HealthcareResult;

    totalAllowableExpenses: number;

    jobIncome: number;
    socialIncome: number;
    totalIncome: number;

    totalWelfare: number;
    eligible: boolean;
}

export class HealthcareResult{
    actualHealthcare: number;
    allowableHealthcare: number;
    message: string;
    exceeded: boolean;
}

// A policy contains rules that are applied to a case (policy = SKOS-Richtlinien)
export interface PolicyInterface {

    subsistence: Array<number>; //Grundbedarf
    houseRentLimits?: Array<number>; // Mietzinslimiten, [0] = 950
    healthInsuranceLimit?: number; // KVG Limite 4

    assetLimitSingle: number;
    assetLimitCouple: number;
    assetLimitChild: number;
    assetLimitTotal: number;

    getBeneficiaryUnit: BeneficiaryUnitBehaviour;
    getHealthcareResult: HealthcareBehaviour;
    //getAccommodationResult: AccommodationBehaviour;
    getWelfareResult(household: Household): WelfareResult;

}

// Behaviour that calculates beneficiary unit based on a household
export interface BeneficiaryUnitBehaviour {
    (household: Household): number;
}

export interface HealthcareBehaviour {
    (household: Household): HealthcareResult;
}

export interface AccommodationBehaviour {
    (household: Household): number;
}