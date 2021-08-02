
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