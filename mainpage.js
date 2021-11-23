function parallax() {
        const elem = document.querySelector(".parallax");
        let _w = window.innerWidth;
        let _h = window.innerHeight;
        let newY = window.scrollY;

        let _depth1 = `${100+(newY - _w) * 0.12}px ${40+(newY - _h) * 0.05}px`;
        let _depth2 = `${50+(newY - _w) * 0.07}px ${(newY - _h) * 0.01}px`;
        let _depth3 = `${(newY - _w) * 0.01}px`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
}

function update(e){
    let newY = window.scrollY;
    document.documentElement.style.setProperty('--scroll', newY + 'px')
}

document.addEventListener('scroll',update)