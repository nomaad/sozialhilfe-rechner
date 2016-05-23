'use strict';

export class Assets{
    hasAssets: number;
    assetValue: number;
    hasVehicle: number;
    vehicleValue: number;

    isAssetsValid(){
        return this.hasAssets == 0 || (this.hasAssets == 1 && this.assetValue > 0);
    }

    isVehicleValid(){
        return this.hasVehicle == 0 || (this.hasVehicle == 1 && this.vehicleValue > 0);
    }

    isValid(){
        return this.isAssetsValid() && this.isVehicleValid();
    }
    
}