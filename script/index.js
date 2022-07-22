import {navbar, footer }from "../components/navbarAndFooterExp.js";
document.querySelector("#navbar").innerHTML = navbar();

document.querySelector("#footer").innerHTML = footer();

document.querySelector("#startFreeTri").addEventListener("click", startFreeTri);
function startFreeTri()
{
    if (document.querySelector("#workEmail").value != "")
    {
        document.querySelector("#workEmail").value="";
        alert("Your Free Trial has start!");
    }
}