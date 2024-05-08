// Creating a Array
let userNames = ["Admin","Falak","Anus","Anaf","Wali"];

// Using ForEach  Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
     console.log(`Hello ${oneUser}, would you like to see a status report?`);
     
    }else{
        console.log(`\nHello ${oneUser}, thank you for logging in.`);
        
    }
})
