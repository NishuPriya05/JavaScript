const coding = ['js','rb','java']
// coding.forEach(  function (item){
//     console.log(item);
// })

coding.forEach( (item,index,arr)=>{
   //  console.log(item,index,arr);
})

const myCoding = [
   {
    languageName:"JavaScript",
    languageFileName: "JS"
   },
   {
    languageName: "Java",
    languageFileName:"Java"
   },
   {
    languageName:"ruby",
    languageFileName:"rb"
   }

]

myCoding.forEach( (item)=> {
console.log(item.languageName);
})