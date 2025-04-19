async function main() {

//Two classes for car and engine with their own constructors 

    //Blueprint for a car
    class Car {
        constructor(make, model, year){
            this.make = make; 
            this.model = model; 
            this.year = year; 
            this.odometer = 0;
            this.engine = new Engine(6, false);  
        }
    }
    
    //Blueprint for engine
    class Engine {
        constructor(cylinderCount, isRunning){
            this.cylinderCount = cylinderCount;
            this.isRunning = isRunning; 
        }
    }

//1. Instantiate a car
//Value for odometer property is always 0, value for engine property is a new nested object of engine class with 6 cylinders and engine false

let myCar = new Car("Honda", "CRV", 2025); 

//Test outputs 

output(`Car make: ${myCar.make}`); 
output(`Car model: ${myCar.model}`); 
output(`Car year: ${myCar.year}`); 
output(`Car odometer: ${myCar.odometer}`); 
output(`Engine cylinders: ${myCar.engine.cylinderCount}`); 
output(`Is the car running: ${myCar.engine.isRunning}`); 

}

// 2. Turn its engine on
// 3. Drive for 100 KM. 
// 4. Turn engine off.  5. Turn engine on.  6. Drive for 50KM. 7. Turn engine off. 
// 8. Output the odometer.   
// 9. Output JSON string representing car object to console.