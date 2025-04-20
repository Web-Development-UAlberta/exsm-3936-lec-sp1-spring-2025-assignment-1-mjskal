async function main() {

//Two classes for car and engine with their own constructors.

    //Blueprint for a car.
    class Car {
        constructor(make, model, year){
            this.make = make; 
            this.model = model; 
            this.year = year; 
            this.odometer = 0;
            this.engine = new Engine(6, false); 
        }
        start() {
            this.engine.isRunning = true; 
        }

        stop() {
            this.engine.isRunning = false; 
        }

        drive(km) {
            if (this.engine.isRunning) {
                this.odometer += km;
            }
            else {
                output("Sorry, engine is not running, please start car!"); 
            }
        }
    }
    
    //Blueprint for engine.
    class Engine {
        constructor(cylinderCount, isRunning){
            this.cylinderCount = cylinderCount;
            this.isRunning = isRunning; 
        }
    }

    //1. Instantiate the car.

    let myCar = new Car("Honda", "CRV", 2025); 

    // 2. Turn engine on.
    myCar.start(); 

    // 3. Drive for 100 KM. 
    myCar.drive(100); 

    // 4. Turn engine off.  5. Turn engine on.  6. Drive for 50KM. 7. Turn engine off. 8. Output the odometer.
    myCar.stop();
    myCar.start(); 
    myCar.drive(50); 
    myCar.stop();
    output(`Odometer reading: ${myCar.odometer}`); 

    // JSON string for car object
    JSONmyCar = JSON.stringify(myCar); 
    output(JSONmyCar); 

}