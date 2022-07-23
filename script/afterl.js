import {navbar, footer }from "../components/navbarAndFooterExp.js";
document.querySelector("#navbar").innerHTML = navbar();

document.querySelector("#footer").innerHTML = footer();


let name=localStorage.getItem("name");

document.querySelector("#showName").innerHTML=`Hello ${name}`;

document.querySelector("#last").innerHTML="";
document.querySelector("#last").innerText="Logout";
document.querySelector("#last").addEventListener("click", logout);
function logout()
{
    localStorage.removeItem("name");
    window.location.href = "index.html";
}