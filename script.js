const tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    opacity:0,
    stagger:0.3,
    duration:0.9,
    skewX:"+=30"
})
tl.from("#line1-part1, .line h2",{
    opacity:0,
    duration:1,
 
    onStart:()=>{
 // increment timer
const timerEl = document.querySelector('#line1-part1 h5');
var grow =0;
setInterval(() => {
    if(grow<100){
        grow++;
        timerEl.innerHTML =grow
        console.log(grow)
    }
    else{
        grow = 100
    }
},40);
    }
})

tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4.3
})
tl.from("#page1",{
    delay:1,
    y:1200,
    ease:Power4.easeInOut
})
tl.to("#loader",{
    display:'none'
})



