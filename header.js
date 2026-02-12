const nav = document.querySelector("nav");
const burber = document.querySelector(".menu")
const lijn1 = document.querySelector(".lijn1")
const lijn2 = document.querySelector(".lijn2")
const lijn3 = document.querySelector(".lijn3")

let menu_open = false;
function menu() {
    if (menu_open == false) {
        nav.style.height = "300px"
        lijn1.style.animation = "collapse1 1s forwards"
        lijn2.style.animation = "collapse2 1s forwards"
        lijn3.style.animation = "collapse3 1s forwards"
        menu_open = true
    } else {
        nav.style.height = "0px"
        lijn1.style.animation = "expand1 1s forwards"
        lijn2.style.animation = "expand2 1s forwards"
        lijn3.style.animation = "expand3 1s forwards"
        menu_open = false
    }
};



console.log(burber)
burber.addEventListener('click',  menu)