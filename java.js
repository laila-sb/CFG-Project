// // I want my Js to 
// 1- take user info and StorageEvent
 //   2-switch between log in and create account
// 3-Display a message after submit button pushed




 // switch between log in and create account

let signUpBttn = document.getElementById("signUpBttn");
let loginBttn = document.getElementById("loginBttn");
let nameField = document.getElementById("nameField");
let regTitle = document.getElementById("regTitle");


loginBttn.onclick =function(){
  nameField.style.maxHeight = "0";
  rePassField.style.maxHeight = "0";
  regTitle.innerHTML = "Welcome back! ";
  signUpBttn.classList.add("disable");
  loginBttn.classList.remove("disable");
  

}

signUpBttn.onclick =function(){
  nameField.style.maxHeight = "60px";
  rePassField.style.maxHeight = "60px";
  regTitle.innerHTML = "Create an Account";
  signUpBttn.classList.remove("disable");
  loginBttn.classList.add("disable");

}

signUpBttn.addEventListener("click", myFunction);

// function Not working 

function myFunction(){

    let Name = document.querySelector("#Name");
    let message = document.querySelector("#message");

    message.innerHTML = "Thanks for signing up, " + Name.value;

  }


