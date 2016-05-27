'use strict';


export class Income {
    hasJobIncome: number;
    jobIncomeValue: number;
    hasSocialIncome: number;
    socialIncomeValue: number;

    constructor(){
        this.jobIncomeValue = 0;
        this.socialIncomeValue = 0;
    }
    isJobIncomeValid(): boolean{
        return this.hasJobIncome == 0 || (this.hasJobIncome == 1 && this.jobIncomeValue > 0);
    }

    isSocialIncomeValid(): boolean{
        return this.hasSocialIncome == 0 || (this.hasSocialIncome == 1 && this.socialIncomeValue > 0);
    }

    isValid(): boolean{
        return this.isJobIncomeValid() && this.isSocialIncomeValid();
    }
    
}