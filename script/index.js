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

document.querySelector("#Ipart9Submit").addEventListener("click", freeTrial);
function freeTrial()
{
    if (document.querySelector("#Ipart9Email").value != "")
    {
        document.querySelector("#Ipart9Email").value="";
        alert("Your Free Trial has start!");
    }
}