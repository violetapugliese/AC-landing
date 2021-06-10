$(function () {    
    const servicesSection = document.getElementById('Services')
    const aboutSection = document.getElementById('About')
    const worksSection = document.getElementById('Works')
    
    const servicesSectionTop = servicesSection.offsetTop;
    const aboutSectionTop = aboutSection.offsetTop;
    const worksSectionTop = worksSection.offsetTop;
    console.log(worksSectionTop);
  var controller = new ScrollMagic.Controller();

  var blockTween = new TweenMax.to("#services-title", 1.5, {
    display: "block",
    transform: "rotate(160deg)",
    transitionDuration: "2s",
    transitionProperty: "transform",
  });
  var containerScene = new ScrollMagic.Scene({
    triggerElement: "#Services",
    duration: parseFloat(aboutSectionTop),
  })
    .setTween(blockTween)
    // .addIndicators()
    .addTo(controller);

    // new ScrollMagic.Scene({ triggerElement: "#Services" , duration: parseFloat(aboutSectionTop) })
    // .setClassToggle("#services-title", "wheel-title-show") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    // .addTo(controller);
});
