const myArr = [0, 1, 2, 3, 4, 5]

const myHeors = ["shaktimaan","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);


// Array methods 

myArr.push(6)  // Add numbers into the array

myArr.pop()  // Removes the value from the array

myArr.unshift(9)  //Adds the value the first in place of the array
myArr.shift()  // Removes the value from the array
// console.log(myArr);

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(3));


// slice , splice

console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr)
const myn2 = myArr.splice(1,3);
console.log(myn2);


 