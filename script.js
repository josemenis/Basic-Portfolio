window.onscroll = function() {scroll()};
var getNav = document.getElementById("navbar");
var makeSticky = getNav.offsetTop;

function scroll() {
    if (window.pageYOffset >= makeSticky) {
        // add class, so in CSS .makeSticky
        getNav.classList.add("makeSticky")
    } else {
        getNav.classList.remove("makeSticky");
    }
}