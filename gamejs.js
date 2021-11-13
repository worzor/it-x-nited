var item1 = 0;
var item2 = 0;
function select1(item){
    item1 = item;
    var All_item = document.querySelectorAll("#game");
    for(let i = 0; i <= All_item.length; i++){
        if(i == item-1){
            All_item[item-1].classList.add("active");
            gameResultCheck();
        }else{
            All_item[i].classList.remove("active");
        }
    }
}

function select2(item){
    item2 = item;
    var All_item = document.querySelectorAll("#game2");
    for(let i = 0; i <= All_item.length; i++){
        if(i == item-1){
            All_item[item-1].classList.add("active");
            gameResultCheck();
        }else{
            All_item[i].classList.remove("active");
        }
    }
}
var fail_counter = 0;
var success_counter = 0;
function gameResultCheck(){
    var All_item1 = document.querySelectorAll("#game");
    var All_item2 = document.querySelectorAll("#game2");
    var heartAll = document.querySelectorAll("#heart");
    if(item1 != 0 && item2 != 0){
        if(item1 == item2){
            console.log("correct!");
            All_item1[item1-1].classList.add("hidden");
            All_item2[item2-1].classList.add("hidden");
            item1 = 0;
            item2 = 0;
            success_counter++;
            console.log(success_counter);
        }
        else{
            console.log("not correct!");
            if(fail_counter == 0){
                heartAll[2].classList.remove("active");
                fail_counter++;
            }else if(fail_counter == 1){
                heartAll[1].classList.remove("active");
                fail_counter++;
            }
            item1 = 0;
            item2 = 0;
            reset();
        }
    }
}

function reset(){
    var All_item1 = document.querySelectorAll("#game");
    var All_item2 = document.querySelectorAll("#game2");
    for(i in All_item1){
        All_item1[i].classList.remove("active");
        All_item2[i].classList.remove("active");
    }
}
