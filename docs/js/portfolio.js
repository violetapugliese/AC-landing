const clients = [   
        {
          id: "client1",
          name: "Hekas",
          category: "Cerveza Artesanal",
          year: 2020,
          action: "Etiquetas para porrones",
          imgCard: "Desarrollo-01-Preview-min.png",
          imgOne: "Desarrollo-01-01-min.png",
          imgTwo: "Desarrollo-01-02-min.png",
          imgThree: "Desarrollo-01-03-min.png"
        },
        {
          id: "client2",
          name: "Hamburgo",
          category: "Hamburguesería",
          year: 2020,
          action: "Campaña +6000S.",
          imgCard: "Desarrollo-02-Preview-min.png",
          imgOne: "Desarrollo-02-01-min.png",
          imgTwo: "Desarrollo-02-02-min.png",
          imgThree: "Desarrollo-02-03-min.png"
        },
        {
          id: "client3",
          name: "Hook",
          category: "Bar",
          year: 2021,
          action: "Identidad & Social Media",
          imgCard: "Desarrollo-03-Preview-min.png",
          imgOne: "Desarrollo-03-01-min.png",
          imgTwo: "Desarrollo-03-02-min.png",
          imgThree: "Desarrollo-03-03-min.png"
        },
        {
          id: "client4",
          name: "La Roty",
          category: "Rotiseria",
          year: 2020,
          action: "Fotografia y diseño de feed",
          imgCard: "Desarrollo-04-Preview-min.png",
          imgOne: "Desarrollo-04-01-min.png", 
          imgTwo: "Desarrollo-04-02-min.png",
          imgThree: "Desarrollo-04-03-min.png"
        },
        {
          id: "client5",
          name: "Nuke",
          category: "Bar",
          year: 2020,
          action: "Social Media",
          imgCard: "Desarrollo-05-Preview-min.png",
          imgOne: "Desarrollo-05-01-min.png",
          imgTwo: "Desarrollo-05-02-min.png",
          imgThree: "Desarrollo-05-03-min.png"
        },
        {
          id: "client6",
          name: "Tokio",
          category: "Estilismo",
          year: 2021,
          action: "Identidad Visual",
          imgCard: "Desarrollo-06-Preview-min.png",
          imgOne: "Desarrollo-06-02-min.png",
          imgTwo: "Desarrollo-06-02-min.png",
          imgThree: "Desarrollo-06-03-min.png"
        }
]

const clientsContainer = document.querySelector(".clients-container")

for ( client of clients) {
    clientsContainer.innerHTML += 
    `
    <div class="col-12 col-sm-6 mt-4">
    <div class="portfolio__card" data-bs-toggle="modal" data-bs-target="#${client.id}">
        <img src="../assets/portfolio/${client.imgCard}">
        <div class="cover">
            <h3>${client.name}</h3>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="${client.id}" tabindex="-1" aria-labelledby="${client.id}Label"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="${client.id}Label">diseño_packaging</h5>
                <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal"
                    aria-label="Close">X</button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row d-flex">
                        <div class="col-4 modal-info">
                            <p class="label">Cliente:</p>
                            <p class="info text-decoration-underline">${client.name}</p>
                        </div>
                        <div class="col-8 modal-info">
                            <p class="label">Rubro:</p>
                            <p class="info">${client.category}</p>
                        </div>
                        <div class="col-4 modal-info">
                            <p class="label">Año:</p>
                            <p class="info">${client.year}</p>
                        </div>
                        <div class="col-8 modal-info">
                            <p class="label">Trabajo:</p>
                            <p class="info">${client.action}</p>
                        </div>
                    </div>
                    <div class="row"></div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-12  mt-4">
                            <img class="modal-img firsts" src="../assets/portfolio/${client.imgOne}">
                        </div>
                        <div class="col-12 col-md-6 mt-4">
                            <img class="modal-img second" src="../assets/portfolio/${client.imgTwo}">
                        </div>
                        <div class="col-12 col-md-6 mt-4">
                            <img class="modal-img second" src="../assets/portfolio/${client.imgThree}">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" data-bs-dismiss="modal">X</button>
            </div>
        </div>
    </div>
</div>
<!-- /Modal -->
    `
}
