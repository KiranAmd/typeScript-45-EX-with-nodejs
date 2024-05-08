// Creating a Array
let Numbers = [1,2,3,4,5,6,7,8,9,];

//Using For-loop
for(let oneNumber of Numbers){
   let ordinalEndig: string;

   if(oneNumber === 1){
    ordinalEndig = "st"
   }
   else if(oneNumber ===2){
    ordinalEndig = "nd"
   }
   else if(oneNumber === 3){
    ordinalEndig = "rd"
   }
   else{
    ordinalEndig = "th"
   }
   console.log(`${oneNumber}${ordinalEndig}`);
   
}
