var r=0;

function rotate()
{
    if(r==0)
    {
        document.querySelector("#rotate").style.transform = "rotate(180deg)";
        
        r=1;

        let div=document.createElement("div");
        div.setAttribute("id", "drop");
        let div2=document.createElement("div");
        div2.addEventListener("click",function() {
            languages("EN");
        });
        let p1=document.createElement("p");
        p1.setAttribute("class", "english");
        
        
        let p2=document.createElement("p");
        p2.innerText = "English";
        

        let div3=document.createElement("div");
        div3.addEventListener("click",function() {
            languages("ES");
        });
        let p3=document.createElement("p");

        p3.setAttribute("class", "espanol");
        let p4=document.createElement("p");
        p4.innerText = "Español";
        


        if(document.querySelector("#language").innerText=="EN")
        {
            p1.innerText="✅";
            p3.innerText="";
        }
        else{
            p3.innerText="✅";
            p1.innerText="";
        }
        div2.append(p1,p2);
        div3.append(p3,p4);
        div.append(div2,div3);
        document.querySelector("#dropdownLanguage").append(div);
    }
    else{
        document.querySelector("#rotate").style.transform = "rotate(360deg)";
        r=0;
        document.querySelector("#dropdownLanguage").innerHTML="";
    }
}

function languages(x)
{
    if(x=="EN")
    {
        document.querySelector(".english").innerText="✅";
        document.querySelector("#language").innerText="EN";
        document.querySelector(".espanol").innerText="";
    }
    else if(x=="ES")
    {
        document.querySelector(".english").innerText="";
        document.querySelector(".espanol").innerText="✅";
        document.querySelector("#language").innerText="ES";
    }
    
}