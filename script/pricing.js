import {navbar, footer }from "../components/navbarAndFooterExp.js";
document.querySelector("#navbar").innerHTML = navbar();

document.querySelector("#footer").innerHTML = footer();

document.querySelector("#div11").addEventListener("click", signup)

function signup(){
  window.location.href="sign_up.html"
}

document.querySelector("#btn1").addEventListener("click", sign)

function sign(){
  window.location.href="sign_up.html"
}
document.querySelector("#btn2").addEventListener("click", signUp)

function signUp(){
  window.location.href="sign_up.html"
}


document.querySelector("#btn3").addEventListener("click", signUpp)

function signUpp(){
  window.location.href="sign_up.html"
}

document.querySelector("#btn").addEventListener("click", signUp4)

function signUp4(){
  window.location.href="sign_up.html"
}

document.querySelector("#getstart").addEventListener("click", signUp5)

function signUp5(){
  window.location.href="sign_up.html"
}



