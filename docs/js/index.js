var bodyPage = document.body;
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

// Preloader
window.onload = function () {
  document.querySelector(".preloader-container").style.display = "none";
  bodyPage.classList.remove("hidden");
};
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

// Marquee
const marquee1 = document.getElementById("marquee-1");
const marquee2 = document.getElementById("marquee-2");
var texto =
  " #Contenido en movimiento x Agencia Crash — #Contenido en movimiento x Agencia Crash — #Contenido en movimiento x Agencia Crash"; // texto de contenido.
var repet =
  texto +
  texto +
  texto +
  texto +
  texto +
  texto +
  texto +
  texto +
  texto +
  texto +
  texto +
  texto +
  texto +
  texto +
  texto +
  texto; // repite el contenido.
marquee1.innerHTML += `<marquee direction=right id="marquee" scrollamount="1" scrolldelay="20" class="marquee" height="20" truespeed onmouseover="this.stop()" onmouseout="this.start()">${repet}</marquee>`;
marquee2.innerHTML += `<marquee id="marquee" scrollamount="1" scrolldelay="20" class="marquee" height="20" truespeed onmouseover="this.stop()" onmouseout="this.start()">${repet}</marquee>`;

// Packs
const carousel = document.getElementById("carousel");
const allPacks = [
  {
    id: "1",
    name: "Pack Basic",
    description: "Lorem ipsum dolor sit etur, adipisicing elit.",
    iv: "none",
    camp: "yes",
    sm: "yes",
    est: "none",
    cont: "none",
    color: "orange",
  },
  {
    id: "2",
    name: "ATC / Full",
    description: "Lorem ipsum dolor sit amet, adipisicing elit.",
    iv: "yes",
    camp: "yes",
    sm: "yes",
    est: "none",
    cont: "none",
    color: "green",
  },
  {
    id: "3",
    name: "ATC Full Full",
    description: "Lorem ipsum dolor sit  consectetur, adipisicing elit.",
    iv: "yes",
    camp: "yes",
    sm: "yes",
    est: "yes",
    cont: "yes",
    color: "blue",
  },
  {
    id: "4",
    name: "Contenido Rotativo",
    description: "Lorem ipsum dolor sit  consectetur, adipisicing elit.",
    iv: "yes",
    camp: "yes",
    sm: "none",
    est: "yes",
    cont: "none",
    color: "orange",
  },
];

for (pack of allPacks) {
  carousel.innerHTML += `
    <label for="pack${pack.id}" id="item${pack.id}" class="pack-container item bg-ac-${pack.color} container">
<div class="row vh-50">
    <div class="col-10 offset-1  pt-3">
        <div class="pack-card">
            <h4 class="mb-0">${pack.name}</h4>
        </div>
    </div>
    <div class="col-10 offset-1 pt-3">
        <p>${pack.description}</p>
        <div class="pack-services-container">
        <div class="pack-services ${pack.iv}">
            <p class="m-0 ">Identidad Visual</p>
            <p>✓</p>
        </div>
        <div class="pack-services ${pack.est}">
            <p class="m-0">Estrategia</p>
            <p>✓</p>
        </div>
        <div class="pack-services ${pack.sm}">
            <p class="m-0">Social Media</p>
            <p>✓</p>
        </div>
        <div class="pack-services ${pack.camp}">
            <p class="m-0">Campaña</p>
            <p>✓</p>
        </div>
        <div class="pack-services ${pack.cont}">
            <p class="m-0">Generación de Contenido</p>
            <p>✓</p>
        </div>
        </div>
        <div>
            <button class="btn btn-ac btn-pack">Contratar</button>
        </div>
    </div>
</div>
</label>
    `;
}
// GalleryOne
var imgGallery = [
  "girl2",
  "girl1",
  "client1",
  "hero-beer2",
  "hero-beer3",
  "friends",
];
var galleryOne = document.getElementById("gallery-client1");

for (img of imgGallery) {
  galleryOne.innerHTML += `
  <div class="card" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        <a data-bs-toggle="modal" data-bs-target="#id${img}">
        <img src="./assets/gallery/${img}.jpg" alt="" class="card-img-top">
        </a>
      </div>

      <div class="modal fade" id="id${img}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Cliente - campaña</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <img src="./assets/gallery/${img}.jpg" alt="">
          </div>
          <div class="modal-footer">
              <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
              </div>
          </div>
      </div>
      </div>
      </div>
      `;
}
// GalleryTwo
var imgGallery2 = [
  "friends1",
  "hero-beer22",
  "hero-beer33",
  "client2",
  "girl4",
  "girl3",
];
var galleryTwo = document.getElementById("gallery-client2");

for (img of imgGallery2) {
  galleryTwo.innerHTML += `
        <div class="card" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
          <a data-bs-toggle="modal" data-bs-target="#id${img}">
          <img src="./assets/gallery/${img}.jpg" alt="" class="card-img-top">
          </a>
        </div>

        <div class="modal  fade" id="id${img}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Cliente - campaña</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="./assets/gallery/${img}.jpg" alt="">
            </div>
            <div class="modal-footer">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        `;
}
// GalleryThree
var imgGallery = [
  "girl22",
  "girl11",
  "hero-beer222",
  "hero-beer333",
  "client3",
  "friends11",
];
var galleryThree = document.getElementById("gallery-client3");

for (img of imgGallery) {
  galleryThree.innerHTML += `
        <div class="card" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
          <a data-bs-toggle="modal" data-bs-target="#id${img}">
          <img src="./assets/gallery/${img}.jpg" alt="" class="card-img-top">
          </a>
        </div>

        <div class="modal  fade" id="id${img}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Cliente - campaña</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="./assets/gallery/${img}.jpg" alt="">
            </div>
            <div class="modal-footer">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        `;
}
// GalleryFour
var imgGallery = [
  "client4",
  "girl111",
  "hero-beer2222",
  "hero-beer3333",
  "friends111",
  "girl222",
];
var galleryFour = document.getElementById("gallery-client4");

for (img of imgGallery) {
  galleryFour.innerHTML += `
        <div class="card" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
          <a data-bs-toggle="modal" data-bs-target="#id${img}">
          <img src="./assets/gallery/${img}.jpg" alt="" class="card-img-top">
          </a>
        </div>

        <div class="modal  fade" id="id${img}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Cliente - campaña</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="./assets/gallery/${img}.jpg" alt="">
            </div>
            <div class="modal-footer">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        `;
}
