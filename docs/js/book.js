const aboutManifest = document.querySelector(".aboutManifestContainer");

function showManifest() {
  aboutManifest.innerHTML = ` <div class="col-12 offset-0 col-md-10 offset-md-1 about-manifest mb-5" data-aos="fade-up" 
  data-aos-duration="1000">
  <div class="about-manifest-title mt-5 mb-3">
      <h1 class="section-title">manifiesto</h1>
  </div>
  <div class="bb-custom-wrapper book">
      <div id="bb-bookblock" class="bb-bookblock">
          <div class="bb-item">
              <div class="bb-custom-firstpage">
                  <p>
                      → Desde el principio hemos tenido en claro que poner en movimiento el contenido de
                      valor
                      de una marca nos impulsa, nos atraviesa.
                  </p>
                  <div class="cover-arrow-prev"></div>
              </div>
              <div class="bb-custom-side">
                  <p>Idear, proyectar y desplegar estrategias que potencien lo que ya existe, nos
                      transforma
                      como sujetos.
  
                  </p>
              </div>
          </div>
          <div class="bb-item">
              <div class="bb-custom-side">
                  <p>¿Cómo quedarnos quietas
                      cuando alrededor
                      todo cambia constantemente?
  
                  </p>
              </div>
              <div class="bb-custom-side">
                  <p>La creatividad
                      nos lleva de un lado al otro,
                      nos hace (re) pensarnos,
                      despertarnos.
                  </p>
              </div>
          </div>
          <div class="bb-item">
              <div class="bb-custom-side">
                  <p>Adoptar un deseo ajeno
                      como propio,
                      para ponerse en funcionamiento
                  </p>
              </div>
              <div class="bb-custom-side">
                  <p>Y así
                      encontrarnos en el usuario.
                      Y saber que a su vez
                      somos un puente,
                      entre ellos y la marca.
                  </p>
              </div>
          </div>
          <div class="bb-item">
              <div class="bb-custom-side">
                  <p>Explorando un terreno
                      que es virgen
                      pero porque cambia todo el tiempo.
                  </p>
              </div>
              <div class="bb-custom-side">
                  <p>Acá se trabaja
                      y con pasión.
                      Porque la transformación posta
                      llega cuando estás en movimiento.
  
                      <img src="../assets/logo-azul-fem.svg" alt="logo-azul-fem" width="20">
  
                  </p>
                  <div class="cover-arrow-next"></div>
              </div>
          </div>
      </div>
  
      <nav>
          <a id="bb-nav-prev" href="#" class="bb-custom-icon bb-custom-icon-arrow-left"><i
                  class="fas fa-arrow-left"></i></a>
          <a id="bb-nav-next" href="#" class="bb-custom-icon bb-custom-icon-arrow-right"><i
                  class="fas fa-arrow-right"></i></a>
      </nav>
  
  </div>
  </div>`
  
  
}
showManifest();

