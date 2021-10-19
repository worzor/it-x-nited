var load_var
function onscrollFunction() {
    let newY = window.scrollY;
    document.body.style.setProperty("--op", newY * 0.3);
    document.querySelector("#yyy").innerText = scrollY;
    
    if(newY >= 1139){ /*ขอบบน 1224*/
        document.getElementById("txt-p1").className = "txt-highlight-3"; 
    }if(newY >= 3945){ /*ขอบบน 4161*/ 
        document.getElementById("txt-p3").className = "txt-highlight-3";
    }if(newY >= 4390){
        document.getElementById("txt-p3-2").className = "txt-highlight-3";
    }if(newY >= 5608){
        document.getElementById("txt-p4").className = "txt-highlight-3";
        document.getElementById("txt-p4-2").className = "txt-highlight-3";
        document.getElementById("img-gscale-p4").className = "img-nr img-gscale-active";
    }if(newY >= 6666){
        document.getElementById("txt-p5").className = "txt-highlight-3";
        document.getElementById("txt-p5-2").className = "txt-highlight-3";
        document.getElementById("img-gscale-p5").className = "img-nr-2 img-gscale-active";
    }
};


/*function loading_Function() {
    myVar = setTimeout(showPage, 3000);
  }
  
function showPage() {
    document.getElementById("loading-sc").style.display = "none";
    document.getElementById("site-body").style.display = "block";
}*/