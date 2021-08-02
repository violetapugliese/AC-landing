
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
  