window.onload = function () {
  $("#preloader").fadeOut();
  $("body").removeClass("hidden");
};

var myNav = document.getElementById("nav-bar");


var navbar = document.querySelector('.wrapper')
var ham = document.querySelector('.menu-btn')
var ham1 = document.querySelector('.menu-btn-ham1')
var ham2 = document.querySelector('.menu-btn-ham2')
var ham3 = document.querySelector('.menu-btn-ham3')
var menuContainer = document.querySelector('.nav-bar-menu-container')
var menuLink = document.querySelectorAll(".nav-bar-menu-link")
var manifestContainer = document.querySelector('.manifest-text-container')
var btnManifest = document.querySelector('.btn-manifest')

ham.addEventListener("click", toggleHamburger)
function toggleHamburger() {
    navbar.classList.toggle("showNav")
    ham1.classList.toggle("closeBtn1")
    ham2.classList.toggle("closeBtn2")
    ham3.classList.toggle("closeBtn3")
    menuContainer.classList.toggle("showMenuLink")
}
menuLink.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleHamburger)
    }
)

// btnManifest.addEventListener("click", expandContainer)
// function expandContainer() {
//     manifestContainer.classList.toggle("manifestExpand")
// }

window.onscroll = function () {
  "use strict";
  AOS.init({
    easing: "ease-out-back",
    duration: 1000,
    mirror: true,
  });
  if (
    document.body.scrollTop >= 300 ||
    document.documentElement.scrollTop >= 300
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};
