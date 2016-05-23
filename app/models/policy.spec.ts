'use strict';

import { Skos2016Policy } from './policy';
import { Household, Age, Relationship, Flatshare } from './household';

function getHousehold(): Household {
    return new Household();
}
function getSingleAdultHousehold(): Household {
    let h = getHousehold();
    h.adults = 1;
    h.age = Age.Age26to35;
    return h;
}
function getSingleYoungAdultHousehold(): Household {
    let h = getSingleAdultHousehold();
    h.age = Age.Age18to25;
    return h;
}
function getMarriedAdultHousehold(): Household {
    let h = getHousehold();
    h.adults = 2;
    h.age = Age.Age26to35;
    h.relationship = Relationship.Married;
    h.kids = 0;
    return h;
}
function getConcubinedAdultHousehold(): Household {
    let h = getMarriedAdultHousehold();
    h.relationship = Relationship.Concubinage;
    return h;
}

describe('Skos2016Policy', () => {

    let h;
    let policy;

    beforeEach(function() {
        h = new Household();
        h.age = Age.Age26to35;
        policy = new Skos2016Policy();
    });

    it('calculates subsistence for single adult', () => {
        expect(policy.getSubsistence(getSingleAdultHousehold())).toEqual(986);
    });

    it('calculates subsistence for married couple without kids', () => {
        expect(policy.getSubsistence(getMarriedAdultHousehold())).toEqual(1509);
    });

    xit('calculates subsistence for concubined couple without kids', () => {
        expect(policy.getSubsistence(getConcubinedAdultHousehold())).toEqual(754.5);
    });

    xit('calculates subsistence for single adult in 2 person household', () => {
        let h = getSingleAdultHousehold();
        h.adults = 2;
        h.relationship = Relationship.Single;
        expect(policy.getSubsistence(h)).toEqual(887.4);
    });

    xit('young adult cannot live alone in a flat', () => {
        expect(function(){ policy.getSubsistence(getSingleYoungAdultHousehold()); }).toThrow(); // young adults cannot live alone, must live with parents or in flat share
    });


    it('returns correct size for single adult', () => {
        h.adults = 1;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(1);
    });

    it('returns correct size for single adult with kid', () => {
        h.adults = 1;
        h.kids = 1;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(2);
    });

    it('returns correct size for single adult with two kids', () => {
        h.adults = 1;
        h.kids = 2;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(3);
    });

    it('returns correct size for single young adult', () => {
        h.adults = 1;
        h.age = Age.Age18to25;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(1);
    });

    it('returns correct size for single young adult with kid', () => {
        h.adults = 1;
        h.kids = 1;
        h.age = Age.Age18to25;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(2);
    });

    it('throws error if 2 adults and no relationship set', () => {
        h.adults = 2;
        expect(function(){ policy.getBeneficiaryUnitSize(h); }).toThrowError("relationship needs to be set, when 2 adults live together");
    });

    it('returns correct size for married couple', () => {
        h.adults = 2;
        h.relationship = Relationship.Married;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(2);
    });

    it('returns correct size for married couple with kid', () => {
        h.adults = 2;
        h.kids = 1;
        h.relationship = Relationship.Married;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(3);
    });

    // Concubinage
    it('returns correct size for concubinage couple', () => {
        h.adults = 2;
        h.relationship = Relationship.Concubinage;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(1);
    });

    it('returns correct size for concubinage couple with kid', () => {
        h.adults = 2;
        h.kids = 1;
        h.relationship = Relationship.Concubinage;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(2);
    });

    // Flat shares
    it('throws error for 3 adults with no relationship set', () => {
        h.adults = 3;
        expect(function(){ policy.getBeneficiaryUnitSize(h); }).toThrowError("relationship needs to be set, when 2 adults live together");
    });

    it('throws error for 3 adults with no flatshare type set', () => {
        h.adults = 3;
        h.relationship = Relationship.Single;
        expect(function(){ policy.getBeneficiaryUnitSize(h); }).toThrowError("flatshare type needs to be set, when more than 2 adults live together");
    });

    it('returns correct size for adult in purpose shared flat', () => {
        h.adults = 3;
        h.relationship = Relationship.Single;
        h.flatshare = Flatshare.Purpose;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(1);
    });

    it('returns correct size for young adult in family like shared flat', () => {
        h.adults = 3;
        h.relationship = Relationship.Single;
        h.flatshare = Flatshare.FamilyLike;
        expect(policy.getBeneficiaryUnitSize(h)).toEqual(1);
    });
    
});
