window.onload = function () {
  $("#preloader").fadeOut();
  $("body").removeClass("hidden");
};

var myNav = document.getElementById("nav-bar");
var myBtn = document.getElementById("menu-btn-span");

window.onscroll = function () {
  "use strict";
  AOS.init({
    easing: "ease-out-back",
    duration: 1000,
    mirror: true,
  });
  if (
    document.body.scrollTop >= 500 ||
    document.documentElement.scrollTop >= 500
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
    myBtn.classList.add("btn-blue");
    myBtn.classList.remove("btn-white");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    myBtn.classList.add("btn-white");
    myBtn.classList.remove("btn-blue");
  }
};
