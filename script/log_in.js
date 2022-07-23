import {navbar, footer }from "../components/navbarAndFooterExp.js";
<<<<<<< HEAD

=======
>>>>>>> 0b5258dd2e016f22293b94bbd5bd5f609386bd1b
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