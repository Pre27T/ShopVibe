let form=document.querySelector("form");
let userName=document.querySelectorAll("input")[0];
let password=document.querySelectorAll("input")[1];
let euser=document.querySelectorAll("span")[0];
let epass=document.querySelectorAll("span")[1];
let eform=document.querySelectorAll("span")[2];

let dataFromStorgae=JSON.parse(localStorage.getItem("data"));
console.log(dataFromStorgae);

 

console.log(form,userName,password,eform,euser,epass);


form.addEventListener("submit",(e)=>{

    euser.innerHTML="";
    epass.innerHTML="";
    eform.innerHTML="";

    //matching login details

    let matchData=dataFromStorgae.find((e)=>{
        if(e.phone==userName.value && e.pass == password.value)
        {
            return e;
        }

        else if(e.first==userName.value && e.pass == password.value)
        {
            return e;
        }
        else if(e.mail==userName.value && e.pass == password.value)
            {
                return e;
            }
    }) 

     

    if(userName.value=="" && password.value=="" ){
        euser.innerHTML="*enter the email or mobile number";
        epass.innerHTML="*enter the password";
        e.preventDefault();
    }
    else if(userName.value =="")
    {
        euser.innerHTML="*enter the email or mobile number";
        e.preventDefault();
    }
    else if(password.value =="")
    {
        epass.innerHTML="*enter the password";
        e.preventDefault();
    }
    else if(matchData)
    {
        alert("welcome to the page");
        localStorage.setItem("oneuser",JSON.stringify(matchData))
    }
    else{
        eform.innerHTML="User Not found";
        e.preventDefault();
    }
});


let h3=document.querySelector("h3");
h3.addEventListener("click",(e)=>{

    if(h3.innerHTML=="show"){
        password.type="text";
        h3.innerHTML="hide";
    }
    else
    {
        password.type="password";
        h3.innerHTML="show";
    }

}) 

//in tostring it will convert to string format but we want as its so we will go with stringfy bcoz its converts into string as  its format.

