var load_var
var count = 0; var tmp = 0;
function onscrollFunction() {
    let newY = window.scrollY;
    document.body.style.setProperty("--op", newY * 0.3);
    document.querySelector("#yyy").innerText = scrollY;
    var sec_1H = document.getElementById("section-nm-1").getBoundingClientRect().y;
    var sec_2H = document.getElementById("section-nm-1-2").getBoundingClientRect().y;
    var winH = window.innerHeight; 
    console.log(((sec_1H - winH/3) * -1) * 0.005)
    if(sec_1H - winH/1.5 < 0 && sec_1H + winH/2 - winH/2 > 0){ /*เทียบความสูง ระหว่างของบน เเละ ขอบล่าง ของ section 1 เเละ 2*/
        if(((sec_1H - winH/3) * -1) * 0.005 > 0){
            document.body.style.setProperty("--scale", ((sec_1H - winH/3) * -1) * 0.0035);
        }
    }if(sec_2H - winH/1.5 < 0 && sec_2H + winH/2 - winH/2 > 0){
        if(((sec_2H - winH/3) * -1) * 0.005 > 0){
            document.body.style.setProperty("--scale_2", ((sec_2H - winH/3) * -1) * 0.0035);
        }
    }
    trigger_AllBar();
};

function trigger_AllBar(){ /*Function ใหญ่ที่จะ Trigger ทุก element ที่จะไป call function ย่อยอีกที*/
    let All_bar = document.querySelectorAll("#highlight");
    let All_el = document.querySelectorAll("#element");
    for(let i of All_bar){
        trigger_Bar(i);
    }for(let t of All_el){
        trigger_el(t);
    }
}

function trigger_Bar(el){ /*Function ย่อยสำหรับ Trigger ตัวของ Highlight*/
    let thisBar = el.getBoundingClientRect().y - (window.innerHeight/2);
    if(thisBar<0){
        el.className = "txt-highlight-3";
    }
}

function trigger_el(el){ /*Function ย่อยสำหรับ Trigger ตัว element ทั่วไปให้ active*/
    let thisTime = el.getBoundingClientRect().y - ((window.innerHeight/2) + 100);
    if(thisTime<0){
        el.classList.add("active");
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

/*
if(newY >= 1000+sc && newY <= 1149+sc){ ขอบบน 1224
    var sec_y = newY - 1000;
    document.getElementById("txt-p1").className = "txt-highlight-3";
    document.body.style.setProperty("--scale", sec_y * 0.007);
    /*trigger("section-nm-1", "#item");
    trigger("section-nm-1", "#circle");*
}if(newY >= 2000+sc && newY <= 2222+sc){
    var sec_y2 = newY - 2000 - sc;
    document.body.style.setProperty("--scale_2", sec_y2 * 0.005);
}if(newY >= 3945+sc){ /*ขอบบน 4161
    document.getElementById("txt-p3").className = "txt-highlight-3";
}if(newY >= 4390+sc){
    document.getElementById("txt-p3-2").className = "txt-highlight-3";
}if(newY >= 5608+sc){
    document.getElementById("txt-p4").className = "txt-highlight-3";
    document.getElementById("txt-p4-2").className = "txt-highlight-3";
    document.getElementById("img-gscale-p4").className = "img-nr img-gscale-active";
}if(newY >= 6666+sc){
    document.getElementById("txt-p5").className = "txt-highlight-3";
    document.getElementById("txt-p5-2").className = "txt-highlight-3";
    document.getElementById("img-gscale-p5").className = "img-nr-2 img-gscale-active";
}if(newY >= 7647+sc){
    document.getElementById("txt-p6").className = "txt-highlight-3";
}if(newY >= 8767+sc){
    document.getElementById("txt-p7").className = "txt-highlight-3";
}if(newY >= 9900+sc){
    document.getElementById("txt-p8").className = "txt-highlight-3";
}if(newY >= 10652+sc){
    time_show(newY, 10652);
}if(newY >= 10950+sc){
    document.getElementById("txt-p9").className = "txt-highlight-3";
    document.getElementById("txt-p9-2").className = "txt-highlight-3";
}if(newY >= 12201+sc){
    document.getElementById("txt-p10").className = "txt-highlight-3";
}

*/