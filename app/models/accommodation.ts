'use strict';

export enum AccommodationType {
    None = 0,
    Rent = 1,
    Property = 2,
    Homeless = 3,
    Free = 4,
    Other = 5
}

export class Accommodation {
    accommodationType: AccommodationType;
    rentValue: number;

    public isValid(): boolean{
       if(this.accommodationType == null || this.accommodationType < 1){
            return false;
       }
       if(this.accommodationType == AccommodationType.Rent){
           return this.rentValue != null && this.rentValue > 0;
       }
       else{
            return true;
       }
    }
    
}