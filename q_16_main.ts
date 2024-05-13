// creating a guestlist array
let Guestlist = ["khatija", "ramsha", "farah","sahar"];

// making variable for those guest who cant come
let Dontcome = Guestlist[0];

console.log(Dontcome, "cant come");
// print the name of guest name who cant come

// Add or remove guest from guest list array
Guestlist.splice(0,1, "aiman");

//message print for Bigger Table
console.log("Good News! We have Found a Bigger Table  For Dinner")

//Adding a New guest at starting index of array
Guestlist.unshift("Noor");

//Adding a new guest at Ending index of array
Guestlist.push("warda");

//Get a middle index of our guest list array
let MiddleIndex:number = Math.floor(Guestlist.length / 2);

//Add a New guest to middle index of array
Guestlist.splice(MiddleIndex, 0, "fatima");


console.log("Updated List of our Guest");

//sendig a invitation message to our guests one by one with their names
Guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me?`));