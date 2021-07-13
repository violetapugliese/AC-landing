window.onload = function () {
  $("#preloader").fadeOut();
  $("body").removeClass("hidden");
};

var myNav = document.getElementById("nav-bar");

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
