// 1- Given a string, reverse each word in the sentence

var str = "Today is a wonderful day"
var reversedStr = str.split(" ").map(function (word) {
   return word.split("").reverse().join("")
})

console.log(reversedStr.join(" "));