'use strict';

import { Skos2016Policy } from './policy';
import { Case } from './case';
import { Household, Age, Relationship } from './household';

function getCase(): Case {
    let c = new Case();
    c.income.hasJobIncome = 0;
    c.income.hasSocialIncome = 0;
    c.assets.hasAssets = 0;
    c.assets.hasVehicle = 0;
    return c;
}
function getSingleAdultHouseholdCase(): Case {
    let c = getCase();
    c.household.adults = 1;
    c.household.age = Age.Age26to35;
    return c;
}
function getSingleYoungAdultHouseholdCase(): Case {
    let c = getSingleAdultHouseholdCase();
    c.household.age = Age.Age18to25;
    return c;
}
function getMarriedAdultHouseholdCase(): Case {
    let c = getCase();
    c.household.adults = 2;
    c.household.age = Age.Age26to35;
    c.household.relationship = Relationship.Married;
    c.household.kids = 0;
    return c;
}
function getConcubinedAdultHouseholdCase(): Case {
    let c = getMarriedAdultHouseholdCase();
    c.household.relationship = Relationship.Concubinage;
    return c;
}

describe('Skos2016Policy', () => {

    it('calculates subsistence for single adult', () => {
        let policy: Skos2016Policy = new Skos2016Policy(getSingleAdultHouseholdCase());
        expect(policy.getSubsistence()).toEqual(986);
    });

    it('calculates subsistence for married couple without kids', () => {
        let policy: Skos2016Policy = new Skos2016Policy(getMarriedAdultHouseholdCase());
        expect(policy.getSubsistence()).toEqual(1509);
    });

    xit('calculates subsistence for concubined couple without kids', () => {
        let policy: Skos2016Policy = new Skos2016Policy(getConcubinedAdultHouseholdCase());
        expect(policy.getSubsistence()).toEqual(754.5);
    });

    xit('calculates subsistence for single adult in 2 person household', () => {
        let c = getSingleAdultHouseholdCase();
        c.household.adults = 2;
        c.household.relationship = Relationship.Single;
        let policy: Skos2016Policy = new Skos2016Policy(c);
        expect(policy.getSubsistence()).toEqual(887.4);
    });

    xit('young adult cannot live alone in a flat', () => {
        let policy: Skos2016Policy = new Skos2016Policy(getSingleYoungAdultHouseholdCase());
        expect(function(){ policy.getSubsistence(); }).toThrow(); // young adults cannot live alone, must live with parents or in flat share
    });
    
});
