import {navbar, footer }from "../components/navbarAndFooterExp.js";

document.querySelector("#navbar").innerHTML = navbar();

document.querySelector("#footer").innerHTML = footer();


document.querySelector("#button").addEventListener("click", login);

function login()
{
    
    alert("You have successfully LogIn!");
    document.querySelector("#email").value="";
    document.querySelector("#password").value="";
    window.location.href="afterl.html";

}