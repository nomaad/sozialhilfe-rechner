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
});
