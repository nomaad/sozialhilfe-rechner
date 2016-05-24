'use strict';

import { Skos2016Policy } from './policy.skos2016';
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
    
});
