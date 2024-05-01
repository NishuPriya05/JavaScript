  function one(){
    const username = "Nishu"

    function two (){
        const website = "youtube"
        console.log(username);
    }
 
   // console.log(website);
    two()

  }

 // one()

 if (true) {
    const username = "Nishu"
    if(username === "Nishu") {
        const website = " youtube"
        console.log(username + website)
    }

    // console.log(website);    ===  gives error because the scope is finished inside the braces

 }


 // console.log(username);  === gives error same as the pervious one


 // +++++++++++++++++++ Interesting +++++++++++ //

 function addone(num) {
    return num + 1 
 }
 console.log(addone(5))