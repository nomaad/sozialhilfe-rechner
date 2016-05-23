'use strict';

export enum Age {
    AgeUnder18= 0,
    Age18to25 = 1,
    Age26to35 = 2,
    Age36to45 = 3,
    Age46to55 = 4,
    Age56to64 = 5,
    Age65Plus = 6
}

export enum Relationship {
    Single = 0,
    Married = 1,
    Concubinage = 2
}

export enum Flatshare {
    Purpose = 0,
    FamilyLike = 1
}

export class Household {
    age: Age;
    kids: number;
    adults: number;
    relationship: Relationship;
    flatshare: Flatshare;

    constructor(kids?: number) {
        this.kids = kids || 0;
    }

    // TODO: probably belongs to policy.. because household should not contain any logic. It should only hold the values about how much people live there. The policy defines then, what is considered as size etc.
    // TODO: rename to getBeneficiaryUnit (Unterstützungseinheit)
    public getHouseholdSize(): number {
        if(this.adults == 1) {
            return this.adults + this.kids;
        }
        else{
            if(this.relationship == null){
                throw Error("relationship needs to be set, when 2 adults live together");
            }
            else{
                if(this.relationship == Relationship.Married){
                    return 2 + this.kids;
                }
                else{
                    if(this.adults > 2 && this.flatshare == null){
                        throw Error("flatshare type needs to be set, when more than 2 adults live together");
                    }
                    return 1 + this.kids;
                }
            }
        }
    }

    public isSizeValid(): boolean{
        if(this.adults == 1){
            return true;
        }
        return false;
    }
    
}