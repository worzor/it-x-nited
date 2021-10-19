var load_var
function onscrollFunction() {
    let newY = window.scrollY;
    document.body.style.setProperty("--op", newY * 0.3);
    document.querySelector("#yyy").innerText = scrollY;
    
    if(newY >= 1000 && newY <= 1149){ /*ขอบบน 1224*/
        var sec_y = newY - 1000;
        document.getElementById("txt-p1").className = "txt-highlight-3";
        document.body.style.setProperty("--scale", sec_y * 0.007);
        /*trigger("section-nm-1", "#item");
        trigger("section-nm-1", "#circle");*/
    }if(newY >= 2000 && newY <= 2222){
        var sec_y2 = newY - 2000;
        document.body.style.setProperty("--scale_2", sec_y2 * 0.005);
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
    }if(newY >= 7647){
        document.getElementById("txt-p6").className = "txt-highlight-3";
    }if(newY >= 8767){
        document.getElementById("txt-p7").className = "txt-highlight-3";
    }if(newY >= 9900){
        document.getElementById("txt-p8").className = "txt-highlight-3";
    }if(newY >= 10652){
        time_show(newY, 10652);
    }if(newY >= 10950){
        document.getElementById("txt-p9").className = "txt-highlight-3";
        document.getElementById("txt-p9-2").className = "txt-highlight-3";
    }if(newY >= 12201){
        document.getElementById("txt-p10").className = "txt-highlight-3";
    }
};

var count = 0;
var sum = 0;
function time_show(axis_y, y){
    var time_all = document.getElementById("time-div").querySelectorAll("span#time");
    if(count == 0){
        sum = y;
    }if(axis_y > sum && count < 11){
        sum = sum + 50;
        time_all[count].className = "time-active"; 
        count++;
    }
}

/*var head_id = ""
var parent_id = ""
function trigger(head_id, parent_id){
    var time_all = document.getElementById(head_id).querySelectorAll(parent_id);
    for(let i = 0; i < time_all.length; i++){
        time_all[i].classList.add("active");
    }
}*/

/*function loading_Function() {
    myVar = setTimeout(showPage, 3000);
  }
  
function showPage() {
    document.getElementById("loading-sc").style.display = "none";
    document.getElementById("site-body").style.display = "block";
}*/