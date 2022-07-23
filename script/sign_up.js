import {navbar, footer }from "../components/navbarAndFooterExp.js";
document.querySelector("#navbar").innerHTML = navbar();

document.querySelector("#footer").innerHTML = footer();

document.querySelector("#button").addEventListener("click", signUp);

function signUp()
{
    localStorage.setItem("name", document.querySelector("#name").value);
    alert("You have successfully signed up!");
    document.querySelector("#email").value="";
    document.querySelector("#name").value="";
    document.querySelector("#password").value="";
    window.location.href="log_in.html";

}