// for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) { 
   // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby'
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);

    }


    const myArray = ["js","rb","python","java"]
    for (const key in myArray) {
       console.log(myArray[key]);
    }