/*      PART 1

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Nishu",
    "Full Name" : "Nishu Priya",
    [mySym] : "mykey1",
    age : 18,
    location : "Jharkhand",
    email : "nishu@yahoo.com",
    isLoggedIn : false,
}

console.log(JsUser["Full Name"])
console.log(JsUser.name)
console.log(JsUser[mySym])


JsUser.email = "nishu@gmail.com"
//Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["Full Name"]}`)
}



console.log(JsUser.greeting())
console.log(JsUser.greetingTwo()) */


// PART2 

const tinderuser = {}
tinderuser.id = "123456"
tinderuser.name = "Priyanshi"
tinderuser.isLoggedIn = false

//console.log(tinderuser)

const regularuser = {
    email : "nishu@@gmail.com",
    fullname : {
        usrefullname : {
            firstname : "Harshit",
            lastname : "Kumar"
        }
    }
}

// console.log(regularuser.fullname.usrefullname.lastname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

console.log(obj3)