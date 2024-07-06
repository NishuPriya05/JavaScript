// 4-How do you chechk is a number is an integer or not

var num = 45;

if(num%1 === 0){
    console.log("it is an integer");
}
else{
    console.log("not integer");
}

var num1 = 45.66;
if (num1%1 === 0) {
    console.log("it is an integer");
}
else{
    console.log("not integer");
}

console.log(Number.isInteger(45));