//Define a function with a rest parameter that accept items arguments representing our sandwich

function make_sandwich(...item: string[]){
    console.log("Making a sandwich with the following items:\n");

   item.forEach(singleitem => console.log("-" + singleitem));

   console.log("\nNow Enjoy Sandwich");
}
//Call the function 3 times with 3 different number of arguments
make_sandwich("chicken","cheese","mayo","egg");

make_sandwich("bread"," butter");

make_sandwich("bread","butter","cheese","chicken","mayo","lettuce","tomato","egg");