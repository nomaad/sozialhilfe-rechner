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

    public isSizeValid(): boolean{
        if(this.adults == 1){
            return true;
        }
        return false;
    }
    
}