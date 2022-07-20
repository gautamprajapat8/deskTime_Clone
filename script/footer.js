document.querySelector("#subscribe").addEventListener("click", Subscribe);
function Subscribe()
{
    if(document.querySelector("#SubscribeEmail").value !="")
    {
        alert("Thanks for subscribing!");
        document.querySelector("#SubscribeEmail").value="";
    }
    
}