let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx;
let x;

// Cursor 
slider.addEventListener('mousedown', (e)=>{
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing'
});
slider.addEventListener('mousenter', ()=> {
    slider.style.cursor = 'grab'
});
slider.addEventListener('mouseup', ()=>{
    slider.style.cursor = 'grab';
});
window.addEventListener('mouseup', ()=>{
    pressed = false;
});
// mouse event
slider.addEventListener('mousemove', (e)=> {
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX

    innerSlider.style.left = `${x -startx}px`
    
    checkboundary()
});
// touch event 
slider.addEventListener('touchstart', (e)=>{
    pressed = true;
    startx = e.touches[0].clientX - innerSlider.offsetLeft;
 });
 
 window.addEventListener('touchend', ()=>{
    pressed = false;
 });
 slider.addEventListener('touchmove', (e)=>{
    if(!pressed) return
    e.preventDefault();
 
    x = e.touches[0].clientX;
 
    innerSlider.style.left = `${x - startx}px`;
 
    checkboundary();
 });

function checkboundary(){
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left) > 0){
        innerSlider.style.left = '0px';
    }else if(inner.right < outer.right){
        innerSlider.style.left = `-${inner.width - outer.width}px`    }
}