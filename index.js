const inputbtn = document.querySelector(".age-input");
const agebtn = document.querySelector(".age-btn");
const result = document.querySelector(".result");

agebtn.addEventListener( "click", () =>{

    if(inputbtn.value == "" ){
        alert("Please Enter a Valid Date");
        return;
    }else{
        
        const dob  = new Date(inputbtn.value)
        const dobYear = dob.getFullYear();

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        console.log("current "+currentYear);
        console.log("dobYear" + dobYear);
        console.log(currentYear > dobYear); 
        console.log(currentYear == dobYear); 
        if(currentYear > dobYear || currentYear == dobYear ){ 

        const age = currentYear - dobYear;

        result.style.color = "red";
         result.style.fontSize = "20px"

        result.innerHTML= `Your Age is :${age}` 
    }else{

            alert("Date of birth is bigger than curret date.")
    }
    }
});