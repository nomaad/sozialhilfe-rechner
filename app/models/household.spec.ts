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

    it('ist not valid without an age for the principal', () => {
        h.age = null;
        expect(h.isSizeValid()).toEqual(false);
        expect(h.errors).toContain("age needs to be set");
    });

    it('is not valid without at least one adult', () => {
        h.adults = null;
        expect(h.isSizeValid()).toEqual(false);
        h.adults = 0;
        expect(h.isSizeValid()).toEqual(false);
        h.adults = -1;
        expect(h.isSizeValid()).toEqual(false);
        expect(h.errors).toContain("a household needs at least one adult");
    });

    it('contains error if 2 adults and no relationship set', () => {
        h.adults = 2;
        expect(h.isSizeValid()).toEqual(false);
        expect(h.errors).toContain("relationship needs to be set, when 2 adults live together");
    });

    // Flat shares
    it('throws error for 3 adults with no relationship set', () => {
        h.adults = 3;
        expect(h.isSizeValid()).toEqual(false);
        expect(h.errors).toContain("relationship needs to be set, when 2 adults live together");
    });

    it('throws error for 3 adults with no flatshare type set', () => {
        h.adults = 3;
        h.relationship = Relationship.Single;
        expect(h.isSizeValid()).toEqual(false);
        expect(h.errors).toContain("flatshare type needs to be set, when more than 2 adults live together");
    });
});
