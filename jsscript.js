var load_var
function onscrollFunction() {
    let newY = window.scrollY;
    document.body.style.setProperty("--op", newY * 0.3);
    document.querySelector("#yyy").innerText = scrollY;
    
    if(newY >= 1224){
        document.getElementById("txt-p1").className = "txt-highlight-3";
    }if(newY >= 4161){
        document.getElementById("txt-p3").className = "txt-highlight-3";
        document.getElementById("txt-p3-2").className = "txt-highlight-3";
    }
};


/*function loading_Function() {
    myVar = setTimeout(showPage, 3000);
  }
  
function showPage() {
    document.getElementById("loading-sc").style.display = "none";
    document.getElementById("site-body").style.display = "block";
}*/