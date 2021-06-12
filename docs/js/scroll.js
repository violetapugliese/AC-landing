$(function () {    
    const servicesSection = document.getElementById('Services')
    const aboutSection = document.getElementById('About')
    const worksSection = document.getElementById('Works')
    const bonusSection = document.getElementById('Bonus')
    
    const servicesSectionTop = servicesSection.offsetTop;
    const aboutSectionTop = aboutSection.offsetTop;
    const worksSectionTop = worksSection.offsetTop;
    const bonusSectionTop = bonusSection.offsetTop;

  var controller = new ScrollMagic.Controller();

  // Services IN-OUT
    new ScrollMagic.Scene({ triggerElement: "#MarqueeOne" , duration: parseFloat(aboutSectionTop),})
    .setClassToggle("#services-title", "wheel-title-show") 
    .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#About" ,  duration: parseFloat(aboutSectionTop),})
    .setClassToggle("#services-title", "wheel-title-out")
    .addTo(controller);

  // About IN-OUT
    new ScrollMagic.Scene({triggerElement: "#About" , duration: parseFloat(worksSectionTop),})
    .setClassToggle("#about-title", "wheel-title-show") 
    .addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#Works" ,  duration: parseFloat(worksSectionTop),})
    .setClassToggle("#about-title", "wheel-title-out")
    .addTo(controller);

  // Works IN-OUT

  new ScrollMagic.Scene({triggerElement: "#Works" , duration: parseFloat(bonusSectionTop),})
  .setClassToggle("#works-title", "wheel-title-show") 
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: "#Bonus" ,  duration: parseFloat(bonusSectionTop),})
  .setClassToggle("#works-title", "wheel-title-out")
  .addTo(controller);

  // Pin wheel
  new ScrollMagic.Scene({triggerElement: "#Services", duration: parseFloat(bonusSectionTop)})
  .setClassToggle("#Wheel", "wheel-absolute")
  .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
  .addTo(controller);


});
