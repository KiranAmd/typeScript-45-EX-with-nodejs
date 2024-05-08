//Define a function to create a car object with optional options..
function create_car(manufacturer,model,...options) {

    //Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    //Add additional options to the car object
    options.forEach(Option => {
        let [key, value] = Option.split(":")
        car[key.trim()] = value.trim();
        
    });
    
    return car;
}

//Call the function to create a car object
let my_car = create_car("Toyota","corolla","color: black","sunroof: true");

//Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
