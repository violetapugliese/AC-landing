const products = [   
    {
        id: "30",
        name: "Emulsión de limpieza Oil-free",
        description: "Emulsión de limpieza Oil-free",
        price: "$2800.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Espuma%20de%20limpieza-oil-free",
    },
    {
        id: "31",
        name: "Efumel TX",
        description: "Efumel TX",
        price: "$2000.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Efumel%20TX",
    },
    {
        id: "32",
        name: "Contorno de Ojos",
        description: " Molecular Spert",
        price: "$4500.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Contorno%20de%20ojos",
    },
    
]
const sets = [
    {
        id: "23",
        name: "Set Lumiere Visage",
        description: "Complejo Hidratante antiarrugas <br><br> - 1 Contorno de ojos Lumiere No más arrugas <br> - 1 Emulsión Lumiere Visage 48hs <br><br>",
        price: "$7000.-",
        height: "card-height-500",
        img: "../images/SetLumiere.png",
        msj: "Set%20Lumiere%20Visage",
    },
    {
        id: "24",
        name: "Set Solution Lift",
        description: "Proteger y estimular las células madre de la piel <br><br>- 1 Serum <br>- 1 Crema <br>- 1 Contorno de ojos",
        price: "$8700.-",
        height: "card-height-500",
        img: "../images/Set SolutionLife.png",
        msj: "Set%20solution%20lift",
    },
    {
        id: "25",
        name: "Set ExtraFirm",
        description: "- 1 Crema Tratamiento intensivo Noche <br> - 1 Crema Ultra Tensora Día <br> - 1 Suero tensor plus Contorno de ojos <br> - 1 Ampolla para combinar ",        
        price: "$8700.-",
        height: "card-height-500",
        img: "../images/SetExtrafirm.png",
        msj: "Set%20estrafirm",
    },
    {
        id: "26",
        name: "Set Biotic Balance - Nuevo!!",
        description: "- 1 Biotic Día <br> - 1 Biotic Noche <br> - 1 A elección (Opc: Esp. de limpieza/Agua micelar/Agua Termal/Bruma de Retinol) <br>",       
        price: "$7500.-",
        height: "card-height-500",
        img: "../images/SetBioticBalance.png",
        msj: "Set%20bioticbalance",
    },
    {
        id: "27",
        name: "Set Despigmentante Global - Nuevo!!",
        description: "- 1 Global Perfection <br> - 1 A elección (Opc: Esp. de limpieza/Agua micelar/Agua Termal/Bruma de Retinol) <br> - Combinar con medicación de profesional <br>",       
        price: "$8700.-",
        height: "card-height-500",
        img: "../images/GlobalPerfection.jpg",
        msj: "Set%20GlobalPerfection",
    },
    {
        id: "28",
        name: "Set Blue Light - Nuevo!!",
        description: "- 1 Ultra Richi Q10  <br> - 1 A elección (Opc: Esp. de limpieza/Agua micelar/Agua <br> Previene el fotoenvejecimiento <br>",       
        price: "$7500.-",
        height: "card-height-500",
        img: "../images/ultraRichQ.jpg",
        msj: "Set%20ultraRichQ",
    },
    {
        id: "29",
        name: "Set Corporal New Body- NUEVO!!",
        description: " - 1 New Body espuma <br>- 1 Exfoliante <br>- 1 Emulsión corporal <br>",       
        price: "$7000.-",
        height: "card-height-500",
        img: "../images/NewBody.png",
        msj: "Set%20NewBody",
    },
]
const productsContainer = document.querySelector(".main-products-big-container")
const setsContainer = document.querySelector(".main-beautybox-big-container")

for ( product of products) {
    productsContainer.innerHTML += 
    `
    <article class="main-products-container-article ${product.height}">
                    <div class="products-circle">
                        <p class="send">Envío<br>gratis</p>
                    </div>
                    <img src="${product.img}" alt="${product.name}">
                    <div>
                        <p class="products-price">${product.price}</p>
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                    </div>
                    <a class="products-button"
                        href="https://api.whatsapp.com/send?phone=5491131709144&text=%C2%A1Hola!%20%C2%A1Me%20gustar%C3%ADa%20encargar%20un${product.msj}">Encargar
                        <i class="icon-whatsapp meddia-button"></i></a>
                </article>
    `
}
for ( set of sets) {
    setsContainer.innerHTML += 
    `
    <article class="main-beautybox-container-article ${set.height}">
                    <div class="beautybox-circle">
                        <p class="send">Envío<br>gratis</p>
                    </div>
                    <img src="${set.img}" alt="${set.name}">
                    <div>
                        <p class="products-price">${set.price}</p>
                        <h4>${set.name}</h4>
                        <p>${set.description}</p>
                    </div>
                    <a class="products-button"
                        href="https://api.whatsapp.com/send?phone=5491131709144&text=%C2%A1Hola!%20%C2%A1Me%20gustar%C3%ADa%20encargar%20un${set.msj}">Encargar
                        <i class="icon-whatsapp meddia-button"></i></a>
                </article>
    `
}
