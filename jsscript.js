function onscrollFunction() {
    let newY = window.scrollY;
    document.body.style.setProperty("--op", newY * 0.3);
    document.querySelector("#yyy").innerText = scrollY;
};

