// Making a array of countries and print its original order
let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);

// Print the array inAlphabetical order without modifying the actual array list
console.log("Alphabetical order:", [...countriesToVisit].sort());

// Show that the array is still in its original order
console.log("Still in original order:", countriesToVisit);

// Print the array in Reversd order without modifying the actual array list
console.log("Reverse order:", [...countriesToVisit].reverse());

// Show that the array is still in its original order
console.log("Still in original order:", countriesToVisit);

// We have changed the original array order Now
console.log("Original  Array Reversed:", countriesToVisit.reverse());

// Print the array to show that its back to its original order
console.log("Back to original order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical order
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());

// We have changed again  the original array order Now in reverse order again
console.log("Original  Array Reversed again:", countriesToVisit.reverse());