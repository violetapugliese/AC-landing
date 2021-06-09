const wheel = document.getElementById('Wheel');
var wheelTop = wheel.offsetTop;

const servicesTitle = document.getElementById('services-title') 
const aboutTitle = document.getElementById('about-title') 
const worksTitle = document.getElementById('works-title') 

const servicesSection = document.getElementById('Services')
const aboutSection = document.getElementById('About')
const worksSection = document.getElementById('Works')

const servicesSectionTop = servicesSection.offsetTop;
const aboutSectionTop = aboutSection.offsetTop;
const worksSectionTop = worksSection.offsetTop;

let y = 0 
window.onscroll = function () {
    let y = window.scrollY;
    wheelFixed(y);
    addTitleWithScroll(y);
}

function wheelFixed (y) {
    if (y > wheelTop) {
        wheel.classList.add('wheel-absolute')
    } else {
        wheel.classList.remove('wheel-absolute')
    }
}

function addTitleWithScroll  (y) {
    
    if ( y > servicesSectionTop && y < aboutSectionTop) {
        servicesTitle.classList.add('wheel-title-show');
    } else {
        servicesTitle.classList.remove('wheel-title-show');
    }
    // if ( y > aboutSectionTop && y < worksSection) {
    //     aboutTitle.classList.add('wheel-title-show');
    // } else {
    //     aboutTitle.classList.remove('wheel-title-show');

    // }
}
