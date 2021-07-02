window.onload = function () {
  $("#preloader").fadeOut();
  $("body").removeClass("hidden");
};

var myNav = document.getElementById("nav-bar");
var myBtn = document.getElementById("menu-btn-span");

window.onscroll = function () {
  "use strict";
  if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500 ) {
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

// window.onscroll = function () {
//   "use strict";
//   if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500 ) {
//     myBtn.classList.add("btn-blue");
//     myBtn.classList.remove("btn-white");
//   } else {
//     myBtn.classList.add("btn-white");
//     myBtn.classList.remove("btn-blue");
//   }
// };
