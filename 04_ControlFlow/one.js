// if

const temperature = 41 

if(temperature === 41){
    console.log("less than 50")
}

else{
    console.log("temperature is greater than 50");
}

const score = 200;

if(score < 100){
    console.log("passed")
    const power = "fly"
    console.log(`user power: ${power}`)
}
 else{
    console.log("failed")
 }


 // nesting

 const balance = 1000

 if(balance < 500){
    console.log("less than 500");
 } else if (balance < 750) {
    console.log("less than 750");
 }else if (balance < 900) {
    console.log("less than 750");
 }
 else{
    console.log("balance")
 }

 const isUserLoggedIn = true
 const debitCard = true 
 const loggedInFromMail = true
 const loggedInFromGoogle = true

 if(isUserLoggedIn && debitCard){
    console.log("Allow to buy courses")
 }
 else{
    console.log("not allowed")
 }
 if (loggedInFromMail || loggedInFromGoogle){
    console.log("logged in")
 }
 else{
    console.log("not loged in")
 }