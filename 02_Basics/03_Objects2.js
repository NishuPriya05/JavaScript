// De-Structure of object

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor: instructor} = course 

console.log(instructor);

// API 
/*
{
    "name": "Harshit",
    "coursename": "JS in Hindi",
    "price" : "free"
}
*/