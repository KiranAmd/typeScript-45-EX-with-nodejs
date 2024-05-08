// Array of Current Users
let current_users = ["asif", "farhan","imran","faraz","ali"];

// Array of New Users
let new_users = ["hamza","aisha","farhan","zain","imran"];

//Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user =>{

    // Making a Condition for username already exist and save in variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // Print Different messages using If-Else statements
    if (our_condition){
    console.log(`\nSorry ${new_one_user} is already taken!`)
    }else{
        console.log(`\nThis Username ${new_one_user} is available`);  
    }
})

