let GuestList = ["khadija" , "ramsha" , "farah"];

let DontCome = guestList[0];

console.log(dontCome, "cant come for dinner");

guestList. splice(0, 1, "aiman");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));
