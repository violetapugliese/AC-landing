const images = [
  "102.png",
  "103.png",
  "104.png",
  "105.png",
  "106.png",
  "107.jpg",
  "107.png",
  "108.png",
  "109.jpg",
  "110.png",
  "111.png",
  "112.png",
  "113.png",
  "114.jpg",
  "115.jpg",
  "116.jpg",
  "117.jpg",
  "118.jpg",
  "119.jpg",
  "120.jpg",
  "121.jpg",
  "122.png",
  "123.jpg",
  "124.jpg",
  "125.png",
  "126.jpg",
  "127.jpg",
  "128.jpg",
  "129.jpg",
  "148.png",
  "149.png",
  "150.png",
  "151.png",
  "152.png",
  "153.jpg",
  "154.jpg",
  "155.jpg",
  "156.jpg",
  "157.jpg",
  "158.jpg",
  "159.jpg",
  "160.jpg",
  "161.jpg",
  "162.jpg",
  "163.jpg",
  "164.jpg",
  "alesandrasanguinetti1.jpg",
  "alesandrasanguinetti2.jpg",
  "alesandrasanguinetti3.jpg",
  "alesandrasanguinetti4.jpg",
  "adrianalestido1.jpg",
  "adrianalestido2.jpg",
  "adrianalestido3.jpg",
  "adrianalestido4.jpg",
];
const bonusContainer = document.querySelector('.bonusContainer')
function rand(n) {
  return Math.floor(Math.random() * n + 1);
}

function cambiar() {
    bonusContainer.innerHTML = 
    `
    <img id="ia" src="../assets/bonus/${images[rand(54)-1]}" alt="meme-agencia-crash">
    `
}

cambiar();
