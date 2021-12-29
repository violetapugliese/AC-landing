const images = [   
  {
    "id": 0,
    "name": "Campo Claro",
    "year": 2021
  },
  {
    "id": 1,
    "name": "Campo Claro",
    "year": 2021
  },
  {
    "id": 2,
    "name": "Sustrato Growers",
    "year": 2021
  },
  {
    "id": "2b",
    "name": "Rankul",
    "year": 2020
  },
  {
    "id": 3,
    "name": "Nuke",
    "year": 2020
  },
  {
    "id": 4,
    "name": "Hekas",
    "year": 2020
  },
  {
    "id": "4b",
    "name": "Mastró",
    "year": 2019
  },
  {
    "id": 5,
    "name": "Hekas",
    "year": 2020
  },
  {
    "id": 6,
    "name": "Campo Claro",
    "year": 2021
  },
  {
    "id": 7,
    "name": "Campo Claro",
    "year": 2020
  },
  {
    "id": 8,
    "name": "Nuke",
    "year": 2020
  },
  {
    "id": 9,
    "name": "Hook",
    "year": 2020
  },
  {
    "id": 10,
    "name": "GlaubenBier",
    "year": 2021
  },
  {
    "id": 11,
    "name": "GlaubenBier",
    "year": 2020
  },
  {
    "id": 12,
    "name": "Hook",
    "year": 2020
  },
  {
    "id": 13,
    "name": "Tokio",
    "year": 2020
  },
  {
    "id": 14,
    "name": "GlaubenBier",
    "year": 2020
  },
  {
    "id": 15,
    "name": "Juli con Essen",
    "year": 2019
  },
  {
    "id": 16,
    "name": "Hamburgo",
    "year": 2021
  },
  {
    "id": 17,
    "name": "Campo Claro",
    "year": 2021
  },
  {
    "id": 18,
    "name": "Hekas",
    "year": 2020
  },
  {
    "id": 19,
    "name": "Hamburgo",
    "year": 2020
  },
  {
    "id": 20,
    "name": "Campo Claro",
    "year": 2021
  },
  {
    "id": 21,
    "name": "Sustrato Growers",
    "year": 2021
  },
  {
    "id": 22,
    "name": "Hook ",
    "year": 2021
  },
  {
    "id": 23,
    "name": "Campo Claro",
    "year": 2021
  },
  {
    "id": 24,
    "name": "Campo Claro",
    "year": 2021
  },
  {
    "id": "24b",
    "name": "Hook",
    "year": 2020
  },
  {
    "id": 25,
    "name": "Hekas",
    "year": 2020
  },
  {
    "id": 26,
    "name": "Sustrato Growers",
    "year": 2021
  },
  {
    "id": 27,
    "name": "Lejano Oeste",
    "year": 2021
  },
  {
    "id": 28,
    "name": "Campo Claro",
    "year": 2021
  },
  {
    "id": 29,
    "name": "GlaubenBier",
    "year": 2020
  },
  {
    "id": 30,
    "name": "Hekas",
    "year": 2020
  },
  {
    "id": 31,
    "name": "GlaubenBier",
    "year": 2021
  },
  {
    "id": 32,
    "name": "Che!LaTorta",
    "year": 2019
  },
  {
    "id": 33,
    "name": "Campo Claro",
    "year": 2021
  },
  {
    "id": 34,
    "name": "Tokio",
    "year": 2019
  },
  {
    "id": 35,
    "name": "Sushic",
    "year": 2021
  },
  {
    "id": 36,
    "name": "Tokio",
    "year": 2019
  },
  {
    "id": 37,
    "name": "Juli con Essen",
    "year": 2020
  },
  {
    "id": 38,
    "name": "Che!LaTorta",
    "year": 2019
  },
  {
    "id": 39,
    "name": "Hekas",
    "year": 2020
  },
  {
    "id": 40,
    "name": "Hekas",
    "year": 2020
  }
]
const swipperImages = document.querySelector(".swiper-wrapper")
for ( image of images) {
    swipperImages.innerHTML += 
    `
    <div class="slider__card-container swiper-slide">
    <picture>
    <source srcset="assets/gallery/${image.id}-small.jpg" media="(max-width:  480px)" />
    <source srcset="assets/gallery/${image.id}-medium.jpg" media="(max-width: 640px)" />
    <source srcset="assets/gallery/${image.id}-big.jpg" media="(max-width: 1200px)" />
    <img class="slider__img" src="./assets/gallery/${image.id}-big.jpg" alt="gallery-ac">
    </picture>
    <div class="slider__info-container">
        <img class="slider__info-icon" src="./assets/info.svg" alt="info logo">
        <div class="slider__info-fill">
            <p>${image.name}, ${image.year}.</p>
        </div>
    </div>
</div>
    `
}

// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });