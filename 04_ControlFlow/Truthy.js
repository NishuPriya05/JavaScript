 const userEmail = []
  if(userEmail){
    console.log("Got user email")
  } else {
    console.log("Don't have user email")
  }

  if (userEmail.length === 0){
    console.log("Array is empty");
  }

  const emptyObj = {}

  if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
  }

  // Nullish Coalescing Operator (??) : null Undefined

  let val1;
  // val1 = 5 ?? 10;
  // val1 = null ?? 10
   val1 = undefined ?? null
//  val1 = null ?? 12 ?? 15
  // val1 = undefined ?? 15

  console.log(val1)

// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");





