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

//Inform that only two guest cane be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite only two Guests two dinner with me");

//Using while-loop to remove guest from the array until only two names remain
while(Guestlist.length > 2) {
let removedGuest = Guestlist.pop();

console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}
//Sending a invitation to the last two guest on the list
console.log("Invitation to the last 2 guests");
Guestlist.forEach(lasttwo => console.log(`luckly ${lasttwo},You are still invited to dinner`));

//REMOVING LAST two guest from the list
Guestlist.pop();
Guestlist.pop();

console.log("Empty list",Guestlist);