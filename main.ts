//Making A Function
function make_shirt (size: string = "large", printMessage: string ="I Love TS"){
console.log(`Creating a ${size} shirt with the ${printMessage} Print on shirt`);
}

//Calling a Function with by-defualt values
make_shirt();

//Calling a Function now with Medium size and default message
make_shirt("Medium");

//Calling a Function now  with small size and also diffrent print message
make_shirt("Small"," I Love JS");