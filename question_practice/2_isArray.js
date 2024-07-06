// 2-How to check if an object is array or not

function checkArry(e){
    return Array.isArray(e);
}

console.log(checkArry([]));
console.log(checkArry({}));



// 3-How to empty an array in javascript

var arr = [1,2,3,4,5,6]

arr.length = 0;

// 5-Make this work : duplicate([1,2,3,4,5]); => [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr){
    return arr.concat(arr)
}

console.log(duplicate([1,2,3,4,5]));