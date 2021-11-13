const clients = [   
    {
        id: "client1",
        name: "Hekas",
        category: "Cerveza Artesanal",
        year: "2020",
        action: "Etiquetas para porrones",
        imgCard: "3.png", 
        imgOne: "3.png",
        imgTwo: "1.png",
        imgThree: "2.png",
    },
]

const clientsContainer = document.querySelector(".clients-container")

for ( client of clients) {
    clientsContainer.innerHTML += 
    `
    <div class="col-12 col-sm-6 mt-4">
    <div class="portfolio__card" data-bs-toggle="modal" data-bs-target="#clientModal">
        <img src="../assets/img/${client.imgCard}">
        <div class="cover">
            <h3>${client.name}</h3>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="clientModal" tabindex="-1" aria-labelledby="clientModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="clientModalLabel">diseño_packaging</h5>
                <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal"
                    aria-label="Close">X</button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row d-flex">
                        <div class="modal-info">
                            <p class="label">Cliente:</p>
                            <p class="info text-decoration-underline">${client.name}</p>
                        </div>
                        <div class="modal-info">
                            <p class="label">Rubro:</p>
                            <p class="info">${client.category}</p>
                        </div>
                        <div class="modal-info">
                            <p class="label">Año:</p>
                            <p class="info">${client.year}</p>
                        </div>
                        <div class="modal-info">
                            <p class="label">Trabajo:</p>
                            <p class="info">${client.action}</p>
                        </div>
                    </div>
                    <div class="row"></div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-12  mt-4">
                            <img class="modal-img firsts" src="../assets/img/${client.imgOne}">
                        </div>
                        <div class="col-12 col-md-auto mt-4">
                            <img class="modal-img second " src="../assets/img/${client.imgTwo}">
                        </div>
                        <div class="col-12 col-md-auto mt-4">
                            <img class="modal-img second" src="../assets/img/${client.imgThree}">
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
