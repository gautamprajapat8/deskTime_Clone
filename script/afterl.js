import {navbar, footer }from "../components/navbarAndFooterExp.js";
document.querySelector("#navbar").innerHTML = navbar();

document.querySelector("#footer").innerHTML = footer();


<<<<<<< HEAD
let name=localStorage.getItem("name");

=======

let name=localStorage.getItem("name");
>>>>>>> 0b5258dd2e016f22293b94bbd5bd5f609386bd1b
document.querySelector("#showName").innerHTML=`Hello ${name}`;

document.querySelector("#last").innerHTML="";
document.querySelector("#last").innerText="Logout";
document.querySelector("#last").addEventListener("click", logout);
function logout()
{
    localStorage.removeItem("name");
    window.location.href = "index.html";
<<<<<<< HEAD
}
=======
}
>>>>>>> 0b5258dd2e016f22293b94bbd5bd5f609386bd1b
