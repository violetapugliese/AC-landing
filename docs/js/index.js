var bodyPage = document.querySelector(".body");
var preloader = document.getElementById("preloader");
var myNav = document.getElementById("nav-bar");
var navbar = document.querySelector(".wrapper");
var ham = document.querySelector(".menu-btn");
var ham1 = document.querySelector(".menu-btn-ham1");
var ham2 = document.querySelector(".menu-btn-ham2");
var ham3 = document.querySelector(".menu-btn-ham3");
var menuContainer = document.querySelector(".nav-bar-menu-container");
var menuLink = document.querySelectorAll(".nav-bar-menu-link");
var manifestContainer = document.querySelector(".manifest-text-container");
var btnManifest = document.querySelector(".btn-manifest");
var btnDarkMode = document.getElementById("darkMode");
var imgDarkMode = document.querySelector(".img-dark-mode")
var navDark = document.querySelector(".wrapper")



// // DarkMode
// btnDarkMode.addEventListener("click", toggleDarkMode);
// function toggleDarkMode(){
//   bodyPage.classList.toggle("dark-mode");
//   navDark.classList.toggle("dark-mode");
//   imgDarkMode.classList.toggle("btn-dark-mode-rotate");
// }

// BurgerButton
ham.addEventListener("click", toggleHamburger);
function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham1.classList.toggle("closeBtn1");
  ham2.classList.toggle("closeBtn2");
  ham3.classList.toggle("closeBtn3");
  menuContainer.classList.toggle("showMenuLink");
}
menuLink.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleHamburger);
});

// Active AOS - NavbarColor
window.onscroll = function () {
  "use strict";
  AOS.init({
    easing: "ease-out-back",
    duration: 1000,
    mirror: true,
  });
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};
