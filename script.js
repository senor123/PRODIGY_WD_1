let clickcount=0;
document.addEventListener('DOMContentLoaded',function(){
    const buttons=document.querySelectorAll('.register');
    buttons.forEach(button=>{
        button.addEventListener('mouseover',function(){
            button.style.color='black';
            button.style.cursor='pointer';
        });
        button.addEventListener('mouseout',function(){
            button.style.color='';
        });
    })
})
document.querySelector(".login").onmouseover=function(){
    document.querySelector(".login").style.color='black';
    document.querySelector(".login").style.cursor='pointer';

}
document.querySelector(".login").onmouseout=function(){
    document.querySelector(".login").style.color='white';
    document.querySelector(".login").style.cursor='pointer';

}
document.addEventListener('DOMContentLoaded',function(){
    const hyperlinks=document.querySelectorAll(".navbar a");
    hyperlinks.forEach(hyperlink=>{
        hyperlink.addEventListener('mouseover',function(){
            hyperlink.style.color='green';
        });
        hyperlink.addEventListener('mouseout',function(){
            hyperlink.style.color='rgb(98, 19, 81)';
        });
    })
})
document.querySelector(".search").onclick=function(){
    document.querySelector(".inputtext").style.border=" 2px ridge";
}
document.querySelector(".search").onmouseover=function(){
    document.querySelector(".search").style.backgroundColor="green";
}
document.querySelector(".search").onmouseout=function(){
    document.querySelector(".search").style.backgroundColor="rgb(98, 19, 81)";
}
document.querySelector(".loandetails").onmouseover=function(){
    document.querySelector(".loandetails").style.backgroundColor="black";
    document.querySelector(".loandetails").style.color="white";
}
document.querySelector(".loandetails").onmouseout=function(){
    document.querySelector(".loandetails").style.backgroundColor="white";
    document.querySelector(".loandetails").style.color="black";
}
document.querySelector(".indiaplans").onmouseover=function(){
    document.querySelector(".indiaplans").style.backgroundColor="black";
    document.querySelector(".indiaplans").style.color="white";
}
document.querySelector(".indiaplans").onmouseout=function(){
    document.querySelector(".indiaplans").style.backgroundColor="white";
    document.querySelector(".indiaplans").style.color="black";
}
document.querySelector(".indiaplans button").onmouseover=function(){
    document.querySelector(".indiaplans button").style.backgroundColor="white";
    document.querySelector(".indiaplans button").style.color="black";
}
document.querySelector(".indiaplans button").onmouseout=function(){
    document.querySelector(".indiaplans button").style.backgroundColor="rgb(98, 19, 81)";
    document.querySelector(".indiaplans button").style.color="white";
}
document.querySelector(".australiaplans").onmouseover=function(){
    document.querySelector(".australiaplans").style.backgroundColor="black";
    document.querySelector(".australiaplans").style.color="white";
}
document.querySelector(".australiaplans").onmouseout=function(){
    document.querySelector(".australiaplans").style.backgroundColor="white";
    document.querySelector(".australiaplans").style.color="black";
}
document.querySelector(".australiaplans button").onmouseover=function(){
    document.querySelector(".australiaplans button").style.backgroundColor="white";
    document.querySelector(".australiaplans button").style.color="black";
}
document.querySelector(".australiaplans button").onmouseout=function(){
    document.querySelector(".australiaplans button").style.backgroundColor="rgb(98, 19, 81)";
    document.querySelector(".australiaplans button").style.color="white";
}
document.querySelector(".usaplans").onmouseover=function(){
    document.querySelector(".usaplans").style.backgroundColor="black";
    document.querySelector(".usaplans").style.color="white";
}
document.querySelector(".usaplans").onmouseout=function(){
    document.querySelector(".usaplans").style.backgroundColor="white";
    document.querySelector(".usaplans").style.color="black";
}
document.querySelector(".usaplans button").onmouseover=function(){
    document.querySelector(".usaplans button").style.backgroundColor="white";
    document.querySelector(".usaplans button").style.color="black";
}
document.querySelector(".usaplans button").onmouseout=function(){
    document.querySelector(".usaplans button").style.backgroundColor="rgb(98, 19, 81)";
    document.querySelector(".usaplans button").style.color="white";
}
document.querySelector("footer").onscrollend=function(){
    if(clickcount%2==0){
        document.querySelector("footer").style.opacity=0.7;
    }
    else{
        document.querySelector("footer").style.opacity=0;
    }
    clickcount+=1;
}



