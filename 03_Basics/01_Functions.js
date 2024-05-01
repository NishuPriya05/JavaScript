function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("U");
}


//sayMyName()

// function addTwoNumbers(Number1, Number2){
//     console.log(Number1 + Number2);
// }

function addTwoNumbers(Number1, Number2){
    // let result = Number1 + Number2
    // return result

    return Number1 + Number2
}

const result = addTwoNumbers(3,5)
   
// consolelog("Result:", result);

function loginUserMessage(username){

    return `${username} just logged in`

}

// console.log(loginUserMessage("Nishu"))



function calculatecartprice(num1){
    return num1
}

//console.log(calculatecartprice(2))


function forspread(...num2){
    return num2
}

//console.log(forspread(200, 3000, 4525))

  
const user = {
    username : "Nishu",
    price : 199
}

function handleObject(anyobject){
   // console.log(`Username is ${anyobject.username} and price is${anyobject.price}`);

}

// handleObject(user)


handleObject({
    username : "Sam",
    price : 399
})