'use strict';

import { Household, Age, Relationship, Flatshare } from './household';

describe('Household', () => {
    let h;

    beforeEach(function() {
        h = new Household();
        h.age = Age.Age26to35;
    });

    it('sets kids to 0 if not provided', () => {
        expect(h.kids).toEqual(0);
    });

    it('returns correct size for single adult', () => {
        h.adults = 1;
        expect(h.getHouseholdSize()).toEqual(1);
    });

    it('returns correct size for single adult with kid', () => {
        h.adults = 1;
        h.kids = 1;
        expect(h.getHouseholdSize()).toEqual(2);
    });

    it('returns correct size for single adult with two kids', () => {
        h.adults = 1;
        h.kids = 2;
        expect(h.getHouseholdSize()).toEqual(3);
    });

    it('returns correct size for single young adult', () => {
        h.adults = 1;
        h.age = Age.Age18to25;
        expect(h.getHouseholdSize()).toEqual(1);
    });

    it('returns correct size for single young adult with kid', () => {
        h.adults = 1;
        h.kids = 1;
        h.age = Age.Age18to25;
        expect(h.getHouseholdSize()).toEqual(2);
    });

    it('throws error if 2 adults and no relationship set', () => {
        h.adults = 2;
        expect(function(){ h.getHouseholdSize(); }).toThrowError("relationship needs to be set, when 2 adults live together");
    });

    it('returns correct size for married couple', () => {
        h.adults = 2;
        h.relationship = Relationship.Married;
        expect(h.getHouseholdSize()).toEqual(2);
    });

    it('returns correct size for married couple with kid', () => {
        h.adults = 2;
        h.kids = 1;
        h.relationship = Relationship.Married;
        expect(h.getHouseholdSize()).toEqual(3);
    });

    // Concubinage
    it('returns correct size for concubinage couple', () => {
        h.adults = 2;
        h.relationship = Relationship.Concubinage;
        expect(h.getHouseholdSize()).toEqual(1);
    });

    it('returns correct size for concubinage couple with kid', () => {
        h.adults = 2;
        h.kids = 1;
        h.relationship = Relationship.Concubinage;
        expect(h.getHouseholdSize()).toEqual(2);
    });

    // Flat shares
    it('throws error for 3 adults with no relationship set', () => {
        h.adults = 3;
        expect(function(){ h.getHouseholdSize(); }).toThrowError("relationship needs to be set, when 2 adults live together");
    });

    it('throws error for 3 adults with no flatshare type set', () => {
        h.adults = 3;
        h.relationship = Relationship.Single;
        expect(function(){ h.getHouseholdSize(); }).toThrowError("flatshare type needs to be set, when more than 2 adults live together");
    });

    it('returns correct size for adult in purpose shared flat', () => {
        h.adults = 3;
        h.relationship = Relationship.Single;
        h.flatshare = Flatshare.Purpose;
        expect(h.getHouseholdSize()).toEqual(1);
    });

    it('returns correct size for young adult in family like shared flat', () => {
        h.adults = 3;
        h.relationship = Relationship.Single;
        h.flatshare = Flatshare.FamilyLike;
        expect(h.getHouseholdSize()).toEqual(1);
    });

});
