'use strict';

import { Income }           from './income'
import { Assets }           from './assets'
import { Healthcare }       from './healthcare'
import { Accommodation }    from './accommodation'

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

    errors: Array<string>;
    age: Age;
    kids: number;
    adults: number;
    relationship: Relationship;
    flatshare: Flatshare;

    assets: Assets;
    income: Income;
    healthcare: Healthcare;
    accommodation: Accommodation;

    constructor(kids?: number) {
        this.kids = kids || 0;

        this.assets = new Assets();
        this.income = new Income();
        this.healthcare = new Healthcare();
        this.accommodation = new Accommodation();
    }

    isValid(){
        // TODO: check if all data is valid
        return this.isSizeValid() &&
            this.income.isValid() &&
            this.assets.isValid() &&
            this.healthcare.isValid() &&
            this.accommodation.isValid();
    }

    public isAgeValid(): boolean{
        if(this.age < 1 || this.age == null){
            this.errors.push("age needs to be set");
            return false;
        }
    }

    public isSizeValid(): boolean{
        this.errors = [];
        if(this.adults < 1 || this.adults == null){
            this.errors.push("a household needs at least one adult");
            return false;
        }
        if(this.adults == 1) {
            return true;
        }
        // 2 adults
        else if(this.adults > 1) {
            if(this.relationship == null){
                this.errors.push("relationship needs to be set, when 2 adults live together");
                return false;
            }
            else{
                if(this.relationship == Relationship.Married){
                    return true;
                }
                else{
                    if(this.adults > 2 && this.flatshare == null){
                        this.errors.push("flatshare type needs to be set, when more than 2 adults live together");
                        return false;
                    }
                    return true;
                }
            }
        }
    }
    
}