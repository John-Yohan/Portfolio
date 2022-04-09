// Push content side nav 

if(window.innerWidth > 650) {
        
    function openNav() {
        const sidenav = document.getElementById("sidenav");
        const content = document.getElementById("content");
        const navicon = document.getElementById("navicon");
        const container = document.getElementById("container");
        const footer = document.getElementById("footer");
        sidenav.classList.toggle("navbar-open");
        content.classList.toggle("content-open");
        navicon.classList.toggle("navicon-open");
        container.classList.toggle("container-open");
        footer.classList.toggle("footer-open");
    }
}

// Sticky nav icon on scroll 

window.onscroll = function() {stickyIcon()};

var navicon = document.getElementById("navicon");
var sticky = navicon.offsetTop;

function stickyIcon() {
    if (window.pageYOffset >= sticky) {
        navicon.classList.add("sticky")
    } else {
        navicon.classList.remove("sticky");
    }
}