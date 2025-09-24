//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
    constructor(color, brand, model, waterLevel){
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.waterLevel = waterLevel;

    }
    brewEspresso(){
        if(this.waterLevel > 0){
            console.log("Brewing your espreesso...");
            this.waterLevel--;
        }
    }
    refillWater(){
        if(this.waterLevel < 10){
            this.waterLevel++;
            console.log("Refilling water...");
            console.log(`Water level: ${this.waterLevel}`);
        }else{
            console.log("Water tank is full!" + this.waterLevel);
        }
    }
    
} 