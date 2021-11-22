var load_var
var count = 0; var tmp = 0;
var winH = 0;
function onscrollFunction(page) {
    let newY = window.scrollY;
    document.body.style.setProperty("--op", newY * 0.3);
    winH = window.innerHeight;
    /*document.querySelector("#yyy").innerText = scrollY;*/
    if(page == 1){
        var sec_1H = document.getElementById("section-nm-1").getBoundingClientRect().y;
        var sec_2H = document.getElementById("section-nm-1-2").getBoundingClientRect().y;
        if(sec_1H - winH/1.5 < 0 && sec_1H + winH/2 - winH/2 > 0){ /*เทียบความสูง ระหว่างของบน เเละ ขอบล่าง ของ section 1 เเละ 2*/
            if(((sec_1H - winH/3) * -1) * 0.005 > 0){
                document.body.style.setProperty("--scale", ((sec_1H - winH/3) * -1) * 0.0035);
            }
        }if(sec_2H - winH/1.5 < 0 && sec_2H + winH/2 - winH/2 > 0){
            if(((sec_2H - winH/3) * -1) * 0.005 > 0){
                document.body.style.setProperty("--scale_2", ((sec_2H - winH/3) * -1) * 0.0035);
            }
        }
        gif_trigger();
    }
    trigger_AllBar();
};

function trigger_AllBar(){ /*Function ใหญ่ที่จะ Trigger ทุก element ที่จะไป call function ย่อยอีกที*/
    let All_bar = document.querySelectorAll("#highlight");
    let All_el = document.querySelectorAll("#element");
    let All_des = document.querySelectorAll("#description");
    for(let i of All_bar){
        trigger_Bar(i);
    }for(let t of All_el){
        trigger_el(t);
    }for(let d of All_des){
        trigger_des(d);
    }
    trigger_timestm();
}

function trigger_Bar(el){ /*Function ย่อยสำหรับ Trigger ตัวของ Highlight*/
    let thisBar = el.getBoundingClientRect().y - (window.innerHeight/2);
    if((thisBar - (winH / 2)) < 0){
        el.className = "txt-highlight-3";
    }
}

function trigger_el(el){ /*Function ย่อยสำหรับ Trigger ตัว element ทั่วไปให้ active*/
    let thisTime = el.getBoundingClientRect().y - ((window.innerHeight/2) - 500);
    if((thisTime - winH) < 0){
        el.classList.add("active");
    }
}

function trigger_des(el){
    let this_des = el.getBoundingClientRect().y - window.innerHeight;
    if(this_des < 0){
        el.classList.add("active");
    }
}

function trigger_timestm(){
    let time = document.querySelector("#time_stm");
    let sub_time = document.querySelectorAll("#time_trig");
    let timestm = time.getBoundingClientRect().y - (window.innerHeight/2);
    
    if((timestm - (winH / 2)) < 0){
        time.classList.add("active");
        for(t in sub_time){
            sub_time[t].classList.add("active");
        }
    }
}

function gif_trigger(){
    let gif = document.getElementById("element-gif");
    let gify = gif.getBoundingClientRect().y - (window.innerHeight/2);

    if((gify - (winH / 2)) < 0){
        gif.classList.add("active");
        setTimeout(function() {
            document.getElementById("element-gif").src = "./CA/รูปหน้าhome/กองขยะ stop0.png"
          }, 2800);
    }
}

function mockup_click(el_mock){ /*Function หลักที่ใช้ควบคุมการเเสดงผลของ mock info*/
    document.querySelector("#des-click").classList.remove("active");
    document.querySelector("#text-container").classList.add("fade-in-text");
    var mockSign = document.querySelectorAll("#mock-sign");
    var mockupAll = document.querySelectorAll("#mock");
    for(let mock = 0; mock <= mockupAll.length; mock++){
        if(mock == el_mock){
            mockupAll[mock].classList.add("active");
            mockSign[mock].classList.add("active")
            mock_infoShow(el_mock);
        }else{
            mockupAll[mock].classList.remove("active");
            mockSign[mock].classList.remove("active");
        }
    }
}

function mock_infoShow(el_mock){ /*Function สำหรับเเสดงข้อความในหน้า ของอันตรายใกล้ตัวเเบบ info*/
    if(el_mock == 0){
        document.querySelector("#mock-info-header").innerText = "สารที่ต้องระวัง";
        document.querySelector("#mock-info-para").innerText = "สารที่มีพิษเฉียบพลัน อันตรายเมื่อสัมผัสกับผิวหนัง และดวงตา มีผลต่อทางเดินหายใจ ควรใช้ในที่อากาศถ่ายเท เช่น สีสเปรย์ สารปรอทในเครื่องสำอาง";
    }if(el_mock == 1){
        document.querySelector("#mock-info-header").innerText = "สารกัดกร่อน";
        document.querySelector("#mock-info-para").innerText = "สารที่มีปฏิกิริยาเคมีจะก่อให้เกิดความเสียหายต่อเนื้อเยื่อของสิ่งมีชีวิตและกัดกร่อนอุปกรณ์ไอระเหยเกิดการระคายเคืองต่อจมูกและตา เช่น ภาชนะบรรจุน้ํากรดในแบตเตอรี่รถยนต์ หรือภาชนะบรรจุน้ํายาทําความสะอาด";
    }if(el_mock == 2){
        document.querySelector("#mock-info-header").innerText = "ระเบิดได้";
        document.querySelector("#mock-info-para").innerText = "สารเคมีที่ก่อให้เกิดการระเบิดเมื่อได้รับความร้อน เเสง ความเร่ง หรือการเสียดสีเช่น ระเบิดทีเอ็นที ดินปืน พลุไฟ ดอกไม้ไฟ หรือสารก่อประกายไฟต่าง ๆ";
    }if(el_mock == 3){
        document.querySelector("#mock-info-header").innerText = "สารพิษ";
        document.querySelector("#mock-info-para").innerText = "สารเคมีที่ก่อให้เกิดอันตรายต่อสิ่งมีชีวิต และสิ่งแวดล้อม เช่น น้ำยาล้างห้องน้ำ สารฆ่าเเมลง สารปรอทในหลอดฟลูออเรสเซนต์";
    }if(el_mock == 4){
        document.querySelector("#mock-info-header").innerText = "สารออกซิไดซ์";
        document.querySelector("#mock-info-para").innerText = "สารช่วยทำให้เกิดเพลิงไหม้ การระเบิดเมื่อสัมผัสกับวัตถุที่ไหม้ไฟ และจะทำให้อัตราในการลุกไหม้เพิ่มขึ้น หรือทำให้เกิดการระเบิดเมื่อได้รับความร้อน การสั่นสะเทือน หรือแรงเสียดทาน เช่น สารคลอรีนที่ใช้ฆ่าเชื้อในสระว่ายน้ำ";
    }if(el_mock == 5){
        document.querySelector("#mock-info-header").innerText = "เป็นอันตรายต่อสุขภาพ";
        document.querySelector("#mock-info-para").innerText = "สารก่อมะเร็ง อาการแพ้ต่อระบบทางเดินหายใจ ความเป็นพิษต่อระบบสืบพันธุ์ก่อให้เกิดการกลายพันธุ์ของเซลล์สืบพันธุ์";
    }if(el_mock == 6){
        document.querySelector("#mock-info-header").innerText = "ก๊าซภายใต้ความดัน";
        document.querySelector("#mock-info-para").innerText = "เป็นสารที่จะระเบิดเมื่อได้รับความร้อน เช่น ภาชนะฉีดพ่น แก๊ซกระป๋อง ที่ประกอบไปด้วย ก๊าซอัด หรือก๊าซเหลว ไม่ควรใช้กับคอนโดสูง เพราะอาจเกิดแรงดันและระเบิดได้  ";
    }if(el_mock == 7){
        document.querySelector("#mock-info-header").innerText = "ช่วยให้ไฟลุก";
        document.querySelector("#mock-info-para").innerText = "สารเคมีที่ติดไฟได้เมื่อระเหยเป็นไอไปสัมผัสกับอากาศ และสัมผัสกับแหล่งจุดติดไฟ อาจอยู่ในรูปของ ของแข็ง ของเหลว ไอ หรือ ก๊าซ เช่น น้ำมันก๊าด น้ำยาล้างเล็บ น้ำยาลบคำผิด ทินเนอร์ กระป๋องสเปรย์";
    }if(el_mock == 8){
        document.querySelector("#mock-info-header").innerText = "สารติดเชื้อ";
        document.querySelector("#mock-info-para").innerText = "สารที่มีเชื้อโรคปนเปื้อน หรือสารที่มีพยาธิปนเปื้อนที่เป็นสาเหตุของการเกิดโรคในสัตว์และคน เช่น หน้ากากอนามัย เข็มฉีดยา ผ้าอนามัย ปรอทวัดไข้";
    }if(el_mock == 9){
        document.querySelector("#mock-info-header").innerText = "เป็นอันตรายต่อสิ่งแวดล้อม";
        document.querySelector("#mock-info-para").innerText = "เป็นอันตรายต่อสิ่งแวดล้อมในน้ำ ทั้งเฉียบพลันและเรื้อรัง เช่น หลอดฟลูออเรสเซนต์ ขวดยา ถ่านไฟฉาย กระป๋องสีสเปรย์ กระป๋อง ยาฆ่าแมลง ภาชนะบรรจุสารอันตรายต่าง ๆ";
    }
    mytime = setTimeout(del_fede, 300);
}

function del_fede(){
    document.querySelector("#text-container").classList.remove("fade-in-text");
}

function mockup_submit(el_mock){ /*เก็บ element ของ mock ที่ส่งมาในหน้าของอันตรายใกล้ตัวที่จะส่งไปหน้าต่อไป เข้าสู่ local storage*/
    localStorage.setItem("MOCK_ELEMENT", el_mock);
    return;
}

function things_click(el_thing){ /*Function หลักที่ใช้ควบคุมการเเสดงผลของ danger things info*/
    document.querySelector("#des-click").classList.remove("active")
    document.querySelector("#text-container").classList.add("fade-in-text");
    var thingBox = document.querySelectorAll("#thing-box");
    var thingsAll = document.querySelectorAll("#thing");
    for(let thing = 0; thing <= thingsAll.length; thing++){
        if(thing == el_thing){
            thingBox[el_thing].classList.add("active");
            thingsAll[el_thing].classList.add("active");
            things_infoShow(el_thing)
        }else{
            thingBox[thing].classList.remove("active");
            thingsAll[thing].classList.remove("active");
        }
    }
}

function things_infoShow(el_thing){ /*Function สำหรับเเสดงข้อความในหน้า วิธีการป้องกัน info*/
    document.querySelector("#mock-info-header").innerText = "";
    document.querySelector("#mock-info-para").innerText = "";
    document.querySelector("#mock-info-header2").innerText = "";
    document.querySelector("#mock-info-para2").innerText = "";
    if(el_thing == 0){
        document.querySelector("#mock-info-header").innerText = "กระป๋องสเปรย์";
        document.querySelector("#mock-info-para").innerText = "นำแก๊สกระป๋องและกระป๋องสเปรย์ ที่ยังเหลือไส้ในอยู่ ใส่ลงในถุง พลาสติกโปร่งใส ห้ามใส่ลงในถุงขยะเฉพาะ วางในจุดทิ้งขยะโดยห่างจากขยะอื่น ๆ กรณีที่จะนำไปทิ้งที่อื่น ต้องทิ้งที่สถานที่กำจัดขยะ ของที่มีเชื้อเพลิง คอยระมัดระวังและหลีกเลี่ยงให้อยู่ไกลไฟ";
    }if(el_thing == 1){
        document.querySelector("#mock-info-header").innerText = "ขวดน้ำมันเครื่อง น้ำยาทำความสะอาด น้ำยาทาเล็บ ทินเนอร์ น้ำยาลบคำผิด";
        document.querySelector("#mock-info-para").innerText = "ให้ปิดฝาให้สนิท ห้ามนำของเหลวข้างในขวดมาเทรวมกัน เก็บในภาชนะที่ไม่รั่วซึม รวบรวมขวดไว้ในถุงพลาสติก ทำเครื่องหมายให้ชัดเจน แล้วนำไปทิ้งในถังขยะอันตราย ตอนเก็บควรระมัดระวัง เก็บไว้ในที่ร่ม และหลีกเลี่ยงให้อยู่ไกลไฟ";
    }if(el_thing == 2){
        document.querySelector("#mock-info-header").innerText = "ยาน้ำ";
        document.querySelector("#mock-info-para").innerText = "ทำลายฉลากยาด้านหน้า แล้วเติมเกลือ แป้ง ผงถ่าน หรือผงเครื่องเทศที่ไม่เป็นพิษ เช่น ขมิ้นหรือมัสตาร์ด ใส่ลงไปในยา เพื่อทำให้ยาน้ำดูไม่น่าดื่มสำหรับทั้งคนหรือสัตว์ จากนั้นนำไปทิ้งในถังขยะรีไซเคิล ควรระมัดระวังและหลีกเลี่ยงให้อยู่ไกลไฟ";
        document.querySelector("#mock-info-header2").innerText = "ยาเม็ด";
        document.querySelector("#mock-info-para2").innerText = "เอายาที่หมดอายุ หรือไม่ต้องการออกจากบรรจุเดิม";
    }if(el_thing == 3){
        document.querySelector("#mock-info-header").innerText = "หลอดไฟ สตาร์ทเตอร์";
        document.querySelector("#mock-info-para").innerText = "นำไปทิ้งในถังขยะอันตรายโดยต้องแยกออกจากขยะอื่น ๆ ให้ชัดเจน เช่น แยกใส่กล่องไว้เพื่อป้องกันอันตรายหากหลอดไฟเกิดแตกสร้างความเสียหายต่อพนักงานเก็บขยะ และการปนเปื้อนสู่สิ่งแวดล้อม ควรระมัดระวัง และหลีกเลี่ยงให้อยู่ไกลไฟ";
    }if(el_thing == 4){
        document.querySelector("#mock-info-header").innerText = "ขยะอิเล็กทรอนิกส์ ถ่าน แบตเตอร์รี่มือถือ";
        document.querySelector("#mock-info-para").innerText = "เก็บรวมรวมถ่านเก่าใส่ไว้ในถุงดำ แล้วติดป้ายว่าขยะพิษ เพื่อแจ้งให้พนักงานเก็บขยะทราบ หรือหากมีซากถ่านไฟฉายเป็นจำนวนมากสามารถแจ้งเรียกฝ่ายความสะอาดของเขตที่พักอาศัยไปรับถึงที่ได้ ตอนเก็บควรระมัดระวัง และหลีกเลี่ยงให้อยู่ไกลไฟ";
    }if(el_thing == 5){
        document.querySelector("#mock-info-header2").innerText = "ขยะติดเชื้อ แมส ผ้าอนามัย กระดาษชำระ ถุงยางอนามัย";
        document.querySelector("#mock-info-para2").innerText = "เก็บรวบรวมขยะติดเชื้อทิ้งขยะในถุงพลาสติก 2 ชั้น โดยใช้ถุงแดงหรือเขียนข้อความ “ขยะติดเชื้อ” ให้เห็นชัดเจน มัดปากถุงให้แน่นเคลื่อนย้ายขยะไปยังจุดรับทิ้งขยะติดเชื้อที่จัดไว้โดยเฉพาะ";
    }if(el_thing == 6){
        document.querySelector("#mock-info-header").innerText = "ปรอทวัดไข้";
        document.querySelector("#mock-info-para").innerText = "หากตัวปรอทเกิดความเสียหาย เช่น แตก หรือมีรอยร้าว ให้นำตัวปรอทมา ผสมกับปูนซีเมนต์แล้วเทลงในกระป๋องพลาสติกขนาดเล็กแล้วนำไปทิ้งในถังขยะอันตราย แต่หากตัวปรอทไม่มีความเสียหาย ให้เก็บแยกไว้ให้มิดชิดแล้วนำไปทิ้งในถังขยะอันตราย";
    }if(el_thing == 7){
        document.querySelector("#mock-info-header").innerText = "ของมีคม ใบมีด ฝากระป๋อง เข็มเย็บผ้า";
        document.querySelector("#mock-info-para").innerText = "ให้นำกระดาษหนังสือพิมพ์มาห่อเเละใส่ถุงไว้พร้อมเขียนระบุให้กับพนักงานเก็บขยะ";
        document.querySelector("#mock-info-header2").innerText = "ไม้เสียบลูกชิ้น";
        document.querySelector("#mock-info-para2").innerText = "หักไม้เป็นท่อน ๆ ก่อน แล้วนำหนังยางมารัดให้แน่นก่อนทิ้ง";
    }
    mytime = setTimeout(del_fede, 300);
}

function mockup_call(){
    var mockup_el = localStorage.getItem("MOCK_ELEMENT");
    mockup_click(mockup_el);
}


function loading_Function() {
    myVar = setTimeout(showPage, 3000);
  }
  
function showPage() {
    document.getElementById("loading-sc").style.display = "none";
    document.getElementById("site-body").style.display = "block";
}

function tooltip_active(tools){
    let tool_All = document.querySelectorAll("#tooltxt");
    tool_All[tools].classList.add("active");
}

function tooltip_reset(){
    let tool_All = document.querySelectorAll("#tooltxt");
    for(i in tool_All){
        tool_All[i].classList.remove("active")
    }
}

function miniNavActive(){
    document.getElementById("mini-nav-bar").classList.remove("unactive");
    document.getElementById("mini-nav-bar").classList.add("active");
}

function miniNavDisactive(){
    document.getElementById("mini-nav-bar").classList.remove("active");
    document.getElementById("mini-nav-bar").classList.add("unactive");
}

function mock_scrolling(){
    var winW = window.innerWidth;
    var last = document.getElementById("last");
    var x = last.getBoundingClientRect().right;
    console.log(parseInt(x - winW));
}

function mob_mockup_click(mock){
    var header = document.getElementById("mob-mock-info-header");
    var subDes = document.getElementById("mob-mock-info-para");
    if(mock == 1){
        header.innerText = "เป็นอันตรายต่อสิ่งแวดล้อม";
        subDes.innerText = "เป็นอันตรายต่อสิ่งแวดล้อมในน้ำทั้งเฉียบพลันและเรื้อรัง เช่น หลอดฟลูออเรสเซนต์ ขวดยา ถ่านไฟฉาย กระป๋องสีสเปรย์ กระป๋อง ยาฆ่าแมลง ภาชนะ บรรจุสารอันตรายต่าง ๆ"
    }
    if(mock == 2){
        header.innerText = "เป็นอันตรายต่อสุขภาพ";
        subDes.innerText = "สารก่อมะเร็ง อาการแพ้ต่อระบบทางเดินหายใจ ความเป็นพิษต่อระบบสืบพันธุ์ก่อให้เกิดการกลายพันธุ์ของเซลล์สืบพันธุ์"
    }
    if(mock == 3){
        header.innerText = "สารกัดกร่อน";
        subDes.innerText = "สารที่มีปฏิกิริยาเคมีจะก่อให้เกิดความเสียหายต่อเนื้อเยื่อและกัดกร่อนอุปกรณ์ไอระเหยเกิดการระคายเคืองต่อจมูกและตาเช่นภาชนะบรรจุน้ํากรด ในแบตเตอรี่รถยนต์หรือบรรจุน้ํายาทําความสะอาด"
    }
    if(mock == 4){
        header.innerText = "สารที่ระเบิดได้";
        subDes.innerText = "สารเคมีที่ก่อให้เกิดการระเบิดเมื่อรับความร้อน เเสง ความเร่ง หรือการเสียดสีเช่น ทีเอ็นที ดินปืน พลุไฟ ดอกไม้ไฟ"
    }
    if(mock == 5){
        header.innerText = "สารที่ต้องระวัง";
        subDes.innerText = "สารที่มีพิษเฉียบพลัน อันตรายเมื่อสัมผัสกับผิวหนังและดวงตา มีผลต่อทางเดินหายใจ ควรใช้ในที่อากาศถ่ายเท เช่น สีสเปรย์ สารปรอทในเครื่องสำอาง"
    }
    if(mock == 6){
        header.innerText = "สารพิษ";
        subDes.innerText = "สารเคมีที่ก่อให้เกิดอันตรายต่อสิ่งมีชีวิต และสิ่งแวดล้อม เช่น น้ำยาล้างห้องน้ำ สารฆ่าเเมลง สารปรอทในหลอดฟลูออเรสเซนต์"
    }
    if(mock == 7){
        header.innerText = "สารช่วยให้ไฟลุก";
        subDes.innerText = "คือสารที่มีเชื้อโรคปนเปื้อนหรือสารที่มีพยาธิปนเปื้อนที่เป็นสาเหตุของการเกิดโรคในสัตว์และคน เช่น หน้ากากอนามัย เข็มฉีดยาผ้าอนามัย ปรอทวัดไข้"
    }
    if(mock == 8){
        header.innerText = "สารติดเชื้อ";
        subDes.innerText = "คือสารที่มีเชื้อโรคปนเปื้อนหรือสารที่มีพยาธิปนเปื้อนที่เป็นสาเหตุของการเกิดโรคในสัตว์และคน เช่น หน้ากากอนามัย เข็มฉีดยา ผ้าอนามัย ปรอทวัดไข้"
    }
    if(mock == 9){
        header.innerText = "สารออกซิไดซ์";
        subDes.innerText = "สารช่วยทำให้เกิดเพลิงไหม้การระเบิดเมื่อสัมผัสกับวัตถุที่ไหม้ไฟและจะทำให้อัตราในการลุกไหม้เพิ่มขึ้นหรือทำให้เกิดการระเบิดเมื่อได้รับความร้อน การสั่นสะเทือน หรือแรงเสียดทาน เช่น สารคลอรีนที่ใช้ฆ่าเชื้อในสระว่ายน้ำ"
    }
    if(mock == 10){
        header.innerText = "ก๊าซภายใต้ความดัน";
        subDes.innerText = "เป็นสารที่จะระเบิดเมื่อได้รับความร้อน เช่น ภาชนะฉีดพ่น แก๊ซกระป๋อง ที่ประกอบไปด้วย ก๊าซอัด หรือก๊าซเหลว ไม่ควรใช้กับคอนโดสูง เพราะอาจเกิดแรงดันและระเบิดได้"
    }
    var mobClick = document.getElementById("mob-click");
    if(mobClick.classList.contains("active")){
        mobClick.classList.remove("active");
    }
    mobMockActive(mock);
}

function mobMockActive(mock){
    var mock = mock-1
    var mobMockAll = document.querySelectorAll("#mobMock");
    for(let m = 0; m <= mobMockAll.length; m++){
        if(mock == m){
            mobMockAll[m].classList.add("active");
        }
        else{
            mobMockAll[m].classList.remove("active");
        }
    }

}

function mob_thing_click(thing){
    var header = document.getElementById("mob-mock-info-header");
    var subDes = document.getElementById("mob-mock-info-para");
    var header2 = document.getElementById("mob-mock-info-header2");
    var subDes2 = document.getElementById("mob-mock-info-para2");
    if(thing == 1){
        header.innerText = "กระป๋องสเปรย์";
        subDes.innerText = "นำแก๊สกระป๋องและกระป๋องสเปรย์ ที่ยังเหลือไส้ในอยู่ ใส่ลงในถุงพลาสติกโปร่งใส ห้ามใส่ลงในถุงขยะเฉพาะ วางในจุดทิ้งขยะโดยห่างจากขยะอื่น ๆ กรณีที่จะนำไปทิ้งที่อื่น ต้องทิ้งที่สถานที่กำจัดขยะ ของที่มีเชื้อเพลิง คอยระมัดระวังและหลีกเลี่ยงให้อยู่ไกลไฟ"
        header2.innerText = "";
        subDes2.innerText = "";
        header.style.paddingRight = "50vw"
    }
    if(thing == 2){
        header.innerText = "ขวดน้ำมันเครื่อง น้ำยาทำความสะอาด น้ำยาทาเล็บ ทินเนอร์ น้ำยาลบคำผิด";
        subDes.innerText = "ให้ปิดฝาให้สนิท ห้ามนำของเหลวข้างในขวดมาเทรวมกัน เก็บในภาชนะที่ไม่รั่วซึม รวบรวมขวดไว้ในถุงพลาสติก ทำเครื่องหมายให้ชัดเจน แล้วนำไปทิ้งในถังขยะอันตราย ตอนเก็บควรระมัดระวัง เก็บไว้ในที่ร่ม และหลีกเลี่ยงให้อยู่ไกลไฟ"
        header2.innerText = "";
        subDes2.innerText = "";
        header.style.paddingRight = "50vw"
    }
    if(thing == 3){
        header.innerText = "ยาน้ำ";
        subDes.innerText = "ทำลายฉลากยาด้านหน้า แล้วเติมเกลือ แป้ง ผงถ่าน หรือผงเครื่องเทศที่ไม่เป็นพิษ เช่น ขมิ้นหรือมัสตาร์ด ใส่ลงไปในยา เพื่อทำให้ยาน้ำดูไม่น่าดื่ม จากนั้นนำไปทิ้งในถังขยะรีไซเคิล ควรระมัดระวังและหลีกเลี่ยงให้อยู่ไกลไฟ"
        header2.innerText = "ยาเม็ด";
        subDes2.innerText = "เอายาที่หมดอายุ หรือไม่ต้องการออกจากบรรจุเดิม แล้วเอาไปรวมกับของอื่นที่รับประทานไม่ได้แล้วนำภาชนะที่บรรจุนำมารีไซเคิล";
        header.style.paddingRight = "50vw"
    }
    if(thing == 4){
        header.innerText = "หลอดไฟ สตาร์ทเตอร์";
        subDes.innerText = "นำไปทิ้งในถังขยะอันตรายโดยต้องแยกออกจากขยะอื่น ๆ ให้ชัดเจน เช่น แยกใส่กล่องไว้ เพื่อป้องกันอันตรายหากหลอดไฟเกิดแตกสร้างความเสียหายต่อพนักงานเก็บขยะและการปนเปื้อนสู่สิ่งแวดล้อมควรระมัดระวังและหลีกเลี่ยงให้อยู่ไกลไฟ"
        header2.innerText = "";
        subDes2.innerText = "";
        header.style.paddingRight = "50vw"
    }
    if(thing == 5){
        header.innerText = "ขยะอิเล็กทรอนิกส์ถ่าน แบตเตอร์รี่มือถือ";
        subDes.innerText = "เก็บรวมรวมถ่านเก่าใส่ไว้ในถุงดำแล้วติดป้ายว่าขยะพิษ เพื่อแจ้งให้พนักงานเก็บขยะทราบหรือหากมีซากถ่านไฟฉายเป็นจำนวนมากสามารถแจ้งเรียกฝ่ายความสะอาดของเขตที่พักอาศัยไปรับถึงที่ได้ ตอนเก็บควรระมัดระวัง และหลีกเลี่ยงให้อยู่ไกลไฟ"
        header2.innerText = "";
        subDes2.innerText = "";
        header.style.paddingRight = "40vw"
    }
    if(thing == 6){
        header.innerText = "ขยะติดเชื้อ แมส ผ้าอนามัย กระดาษชำระ ถุงยางอนามัย";
        subDes.innerText = "เก็บรวบรวมไว้ในถุงพลาสติก 2 ชั้น โดยใช้ถุงแดงหรือเขียนข้อความ “ขยะติดเชื้อ” ให้เห็นชัดเจนมัดปากถุงให้แน่นเคลื่อนย้ายขยะไปยังจุดรับทิ้งขยะติดเชื้อที่จัดไว้โดยเฉพาะ"
        header2.innerText = "";
        subDes2.innerText = "";
        header.style.paddingRight = "30vw"
    }
    if(thing == 7){
        header.innerText = "ปรอทวัดไข้";
        subDes.innerText = "หากตัวปรอทเกิดความเสียหาย เช่น แตก หรือมีรอยร้าวให้นำตัวปรอทเอามาผสมกับปูนซีเมนต์แล้วเทลงในกระป๋องพลาสติกขนาดเล็ก แล้วนำไปทิ้งในถังขยะอันตรายแต่หากตัวปรอทไม่มีความเสียหายให้เก็บแยกไว้ให้มิดชิด แล้วนำไปทิ้งในถังขยะอันตราย"
        header2.innerText = "";
        subDes2.innerText = "";
        header.style.paddingRight = "0"
    }
    if(thing == 8){
        header.innerText = "ของมีคม ใบมีด ฝากระป๋อง";
        subDes.innerText = "นำกระดาษหนังสือพิมพ์มาห่อเเละใส่ถุงไว้พร้อมเขียนระบุให้กับพนักงานเก็บขยะ"
        header2.innerText = "ไม้เสียบลูกชิ้น";
        subDes2.innerText = "หักไม้เป็นท่อน ๆ ก่อน แล้วนำหนังยางมารัดให้แน่นก่อนทิ้ง";
        header.style.paddingRight = "0"
    }
    var mobClick = document.getElementById("mob-click");
    if(mobClick.classList.contains("active")){
        mobClick.classList.remove("active");
    }
    mobMockActive(thing);
}

/*var head_id = ""
var parent_id = ""
function trigger(head_id, parent_id){
    var time_all = document.getElementById(head_id).querySelectorAll(parent_id);
    for(let i = 0; i < time_all.length; i++){
        time_all[i].classList.add("active");
    }
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