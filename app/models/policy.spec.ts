'use strict';

import { Skos2016Policy } from './policy';
import { Case } from './case';

function getSingleAdultHouseholdCase(): Case {
    let c = new Case();
    c.household.householdSize = 1;
    c.household.singleHousehold = 1;
    c.household.age = 2;
    c.income.hasJobIncome = 0;
    c.income.hasSocialIncome = 0;
    c.assets.hasAssets = 0;
    c.assets.hasVehicle = 0;
    return c;
}

describe('Skos2016Policy', () => {

    it('calculates subsistence for single adult', () => {
        let policy: Skos2016Policy = new Skos2016Policy(getSingleAdultHouseholdCase());
        expect(policy.getSubsistence()).toEqual(986);
    });

});
