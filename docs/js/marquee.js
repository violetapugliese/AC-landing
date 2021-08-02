
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
