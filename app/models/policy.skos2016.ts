'use strict';

import { Household, Age, Relationship } from './household';
import {PolicyInterface, GetBeneficiaryUnit, WelfareResult} from './policy.interfaces';
import {skos2016BeneficiaryUnitBehaviour} from './policy.beneficiaryunit';

// Implementation based on http://skos.ch/uploads/media/2016_SKOS-Richtlinien-komplett-d.pdf
export class Skos2016Policy implements PolicyInterface {

    subsistence: Array<number>; //Grundbedarf
    houseRentLimits: Array<number>; // Mietzinslimiten, [0] = 950
    healthInsuranceLimit: number; // KVG Limite 4

    assetLimitSingle: number;
    assetLimitCouple: number;
    assetLimitChild: number;
    assetLimitTotal: number;
    getBeneficiaryUnit: GetBeneficiaryUnit;

    constructor(){
        this.subsistence = [986, 1509, 1834, 2110, 2386, 2586, 2786, 2986, 3186, 3386];
        this.assetLimitSingle = 4000;
        this.assetLimitCouple = 8000;
        this.assetLimitChild  = 2000;
        this.assetLimitTotal = 10000;
        this.getBeneficiaryUnit = skos2016BeneficiaryUnitBehaviour;
    }

    public getWelfareResult(h: Household): WelfareResult {
        let r = new WelfareResult();

        r.householdSize = h.size();
        r.unitSize = this.getBeneficiaryUnit(h);

        r.subsistence = this.getSubsistence(h);

        // TODO: move to behaviour
        r.actualRent = Number(h.accommodation.rentValue);
        r.allowableRent = Number(h.accommodation.rentValue);

        // TODO: move to behaviour
        r.actualHealthcare = Number(h.healthcare.kvg);
        r.allowableHealthcare = Number(h.healthcare.kvg);

        r.totalAllowableExpenses = Number(r.subsistence) + Number(r.allowableRent) + Number(r.allowableHealthcare);

        r.jobIncome = Number(h.income.jobIncomeValue);
        r.socialIncome = Number(h.income.socialIncomeValue);
        r.totalIncome = Number(r.jobIncome) + Number(r.socialIncome);

        r.totalWelfare = Number(r.totalAllowableExpenses) - Number(r.totalIncome);
        r.eligible = r.totalAllowableExpenses > r.totalIncome;

        return r;
    }

    private getSubsistence(h: Household): number {
        if(h.age > Age.Age18to25) {
            return this.subsistence[this.getBeneficiaryUnit(h) - 1];
        }
        else{
            throw new Error("not implemented");
        }
    }
    
}