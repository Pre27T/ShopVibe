let form = document.querySelector("form");
let firstName = document.querySelectorAll("input")[0];
let lastName = document.querySelectorAll("input")[1];
let Email = document.querySelectorAll("input")[2];
let mobileNumber = document.querySelectorAll("input")[3];
let createPassword = document.querySelectorAll("input")[4];
let confirmPassword = document.querySelectorAll("input")[5];

let eFirst = document.querySelectorAll("span")[0];
let eLast = document.querySelectorAll("span")[1];
let eEmail = document.querySelectorAll("span")[2];
let eMobile = document.querySelectorAll("span")[3];
let epass = document.querySelectorAll("span")[4];
let ecpass = document.querySelectorAll("span")[5];
let storage=[];
let dataFromStorgae=JSON.parse(localStorage.getItem("data"));

if(dataFromStorgae)
{
    storage=dataFromStorgae;
}

console.log(dataFromStorgae,storage);


form.addEventListener("submit",(e)=>{

    
    let flag = true;
    //first name validation
    let regx=/^[a-zA-Z]{1,17}$/;
   if(firstName.value==""){
    eFirst.innerHTML = "*Enter the first name";
    e.preventDefault();
    // flag=false;
   }
   else if(regx.test(firstName.value)){
    eFirst.innerHTML = "";

   }
   else{
    eFirst.innerHTML = "*invalid first name"
    e.preventDefault();
    // flag=false;
   }

   //last name validation
   if(lastName.value==""){
    eLast.innerHTML = "*Enter the last name";
    e.preventDefault();
    // flag=false;
   }
   else if(regx.test(lastName.value)){
    eLast.innerHTML = "";

   }
   else{
    eLast.innerHTML = "*invalid last name "
    e.preventDefault();
    // flag=false;
   }

   //email validation
   
   
   if(Email.value == ""){
    eEmail.innerHTML = "Enter the email";
    e.preventDefault();
    // flag=false;
   }
   else{
    eEmail.innerHTML = "";
   }

   //Mobile Number Validation
   //mobile va;idation
   let  mobileCheck=storage.find((e)=>{
    if(e.phone==mobileNumber.value)
    {
        return e;
    }
       
}); 
    let regxmob = /^[6-9][0-9]{9}$/;

    if(mobileCheck){
        eMobile.innerHTML="Mobile number already registered" ;
        e.preventDefault();
        flag=false;
    }

  else if(mobileNumber.value == ""){
    eMobile.innerHTML = "enter the mobile number"
    e.preventDefault();
    // flag=false;
   }
   else if(regxmob.test(mobileNumber.value)){
    eMobile.innerHTML = "";
   }
   else{
    eMobile.innerHTML = "*invalid mobile Number";
    e.preventDefault();
    // flag=false;
   }
   

   //create Password Validation
   let regxpass = /^[a-zA-Z0-9@#$]{6,25}$/;

   if(createPassword.value ==""){
    epass.innerHTML = "create the password";
    e.preventDefault();
    // flag=false;
   }
   else if(regxpass.test(createPassword.value)){
    epass.innerHTML = "";
   }
   else{
    epass.innerHTML = "*invalid Password";
    e.preventDefault();
    // flag=false;
   }

   //confirm Password validation
   if(confirmPassword ==""){
    ecpass.innerHTML = "enter the password"
    e.preventDefault();
    // flag=false;
   }
   else if(createPassword.value == confirmPassword.value){
    ecpass.innerHTML = "";
   }
   else{
    ecpass.innerHTML = "password not match";
    e.preventDefault();
    // flag=false;
   }

   
  //store data in local storage
  if(flag)
  {
    let details = {
        first:firstName.value,
        last:lastName.value,
        mail:Email.value,
        phone:mobileNumber.value,
        pass:createPassword.value,
        caritems:null,
       };

       storage.push(details);
    
       localStorage.setItem("data",JSON.stringify(storage));
      // console.log(details);
  }
 
   
});


 