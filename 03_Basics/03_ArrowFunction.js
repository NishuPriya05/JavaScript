const user = {
    username : "Nishu",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Harshit"
user.welcomeMessage()

// console.log(this)  // gives empty value because we are inside the node environment

// function chai (){
//     console.log(this)
// }

// chai()


// const chai = function (){   // we can declare function as this also
//     console.log(this)
// }

// chai()

// const chai = () => {    // this is arrow function
//     console.log(this)
// }

// chai()


const add = (num1, num2) => {
    return num1 + num2
}

// console.log(add(3,4))

// another way

const addtwo = (num1, num2) => num1 + num2

console.log(addtwo(5,6))

