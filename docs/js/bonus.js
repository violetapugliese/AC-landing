const images = [
  "102",
  "103",
  "104",
  "105",
  "106",
  "107",
  "107",
  "108",
  "109",
  "110",
  "111",
  "112",
  "113",
  "114",
  "115",
  "116",
  "117",
  "118",
  "119",
  "120",
  "121",
  "122",
  "123",
  "124",
  "125",
  "126",
  "127",
  "128",
  "129",
  "148",
  "149",
  "150",
  "151",
  "152",
  "153",
  "154",
  "155",
  "156",
  "157",
  "158",
  "159",
  "160",
  "161",
  "162",
  "163",
  "164",
  "alesandrasanguinetti1",
  "alesandrasanguinetti2",
  "alesandrasanguinetti3",
  "alesandrasanguinetti4",
  "adrianalestido1",
  "adrianalestido2",
  "adrianalestido3",
  "adrianalestido4",
];
const bonusImgContainer = document.querySelector('.bonusImgContainer')
function rand(n) {
  return Math.floor(Math.random() * n + 1);
}

function cambiar() {
    bonusImgContainer.innerHTML = 
    `<picture>
    <source srcset="../assets/bonus/${images[rand(54)-1]}-small.jpg" media="(max-width:  480px)" />
    <source srcset="../assets/bonus/${images[rand(54)-1]}-medium.jpg" media="(max-width: 640px)" />
    <source srcset="../assets/bonus/${images[rand(54)-1]}-big.jpg" media="(max-width: 1200px)" />
    <img id="ia" src="../assets/bonus/${images[rand(54)-1]}-small.jpg" alt="meme-agencia-crash">
    </picture>
    
    `
}

cambiar();
