function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }

// loadingAnimation()
function loadingAnimation(){
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
    // y:1200,
    y:0,
    ease:Power4.easeInOut
})
tl.to("#loader",{
    display:'none'
})
tl.from(" #hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    stagger:0.2
})
tl.from("#hero1,#page2",{
   opacity:0
},"-=1")
tl.from('#nav img',{
    opacity:0,
    y:50,
})
tl.from("#nav-part2",{
    y:50,
    opacity:0,
    stagger:0.1,
})
}




function cursorMove(){
//  magnetic effect
Shery.makeMagnet("#nav-part2 h4");
const cursor = document.querySelector('#cursor')

document.addEventListener('mousemove',(e)=>{
        gsap.to(cursor,{
            left :e.clientX-10+'px',
            top:e.clientY-10+'px',
            ease:Circ.ease,
            opacity:1,
            scale:1
        })
})
//  video-container
const videoContainer = document.querySelector('#video-container');

videoContainer.addEventListener('mouseenter', () => {
    cursor.style.scale = 0;
    videoContainer.addEventListener('mousemove', (e) => {
        gsap.to('#video-cursor', {
            left: e.clientX - 500 + 'px',
            top: e.clientY - 350 + 'px',
            ease: Power4.ease,
            opacity: 1,
            scale: 1
        });
    });
});

videoContainer.addEventListener('mouseleave', () => {
    cursor.style.scale = 1;
    gsap.to('#video-cursor', {
        opacity: 1,
        scale: 1
    });
});


// video play

const video =document.querySelector('#video-container video')
var flag = true
video.addEventListener('click',function(){
   if(flag){
    video.play()
    video.style.opacity = 1;
    document.querySelector('#video-cursor').innerHTML='<i class="ri-pause-line"></i>'
    gsap.to("#video-cursor",{
        scale:0.5
    })
    flag =false
   }else{
    video.pause()
    video.style.opacity = 0;
    document.querySelector('#video-cursor').innerHTML='<i class="ri-play-mini-line"></i>'
    gsap.to("#video-cursor",{
        scale:1
    })
    flag =true
   }
})

}
function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:
            {"a":{"value":2,"range":[0,30]},"b":{"value":0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true
    })
}





document.addEventListener('mousemove',function(e){
    gsap.to("#flag",{
        left : e.x,
        top :e.y
    })
})
document.querySelector("#hero3").addEventListener('mousemove',function(e){
    gsap.to("#flag",{
      opacity:1  
    })
})
document.querySelector("#hero3").addEventListener('mouseleave',function(e){
    gsap.to("#flag",{
      opacity:0  
    })
})








//  scrolling animation
function scrollAnimation() {
    gsap.from("#page3 h1", {
        y:150,
        opacity:0,
        duration:0.5,
        stagger:0.1,
        scrollTrigger: {
            trigger: "#page3 h1",
            scroller: "#main",
            start: "0% 90%", 
            end: "-10%% 90%",   

          
        }
    });
    gsap.from("#page3 .underline", {
        width: 0,
        duration:1.7,
        delay:0.3,
        scrollTrigger: {
            trigger: "#page3 .underline",
            scroller: "#main",
            start: "0% 90%", 
            end: "0% 90%",  

          
        
        }
    });
    gsap.from('#page4-content h1',{
        y:150,
        opacity:0,
        duration:0.5,
        stagger:0.1,
        scrollTrigger: {
            trigger: "#page4-content h1",
            scroller: "#main",
            start: "0% 90%", 
            end: "-10%% 90%",   
           
          
        }

    })
    gsap.from("#page4-content .underline", {
        width: 0,
        duration:1.7,
        delay:0.3,
        scrollTrigger: {
            trigger: "#page4-content .underline",
            scroller: "#main",
            start: "0% 90%", 
            end: "0% 90%",  
 
        }
    });
const paragraph = document.querySelectorAll('#page4-content .holder p')
paragraph.forEach(item => {
    let clutter = ''
    const text = item.textContent
    const splitValue = text.split("")
    splitValue.forEach(letter => {
        clutter += `<span>${letter}</span>`
    })
    item.innerHTML = clutter
})
gsap.to("#page4-content p span",{
    opacity:0.5,
    stagger:0.1,
     scrollTrigger: {
         trigger: "#page4-content",
         scroller: "#main",
         start: "top 70%", 
         end: "50% 70%",  
         scrub:1,
     
     }
 })

 const paragraph2 = document.querySelectorAll('#page4-flex  p')
paragraph2.forEach(item => {
    let clutter2 = ''
    const text = item.textContent
    const splitValue = text.split("")
    splitValue.forEach(letter => {
        clutter2 += `<span>${letter}</span>`
    })
    item.innerHTML = clutter2
})
gsap.to("#page4-flex p span",{
    opacity:0.5,
    stagger:0.1,
     scrollTrigger: {
         trigger: "#page4-flex ",
         scroller: "#main",
         start: "30% 70%", 
         end: "60% 70%",  
         scrub:1,
       
     }
 })


 // marquee above the underline
 gsap.to(" .underline-copy", {
    width: '100%',
    duration:1.7,
    scrollTrigger: {
        trigger: "#page4-content .underline-copy ",
        scroller: "#main",
        start: "bottom 90%", 
        end: "bottom 90%",  
   

    }
});


// for footer 

gsap.from('#footer h1',{
    y:150,
    opacity:0,
    duration:0.5,
    stagger:0.1,
    scrollTrigger: {
        trigger: "#footer h1",
        scroller: "#main",
        start: "0% 90%", 
        end: "-10% 90%",   
    },

})
gsap.from("#footer .underline", {
    width: 0,
    duration:1.7,
    delay:0.3,
    stagger:0.5,
    scrollTrigger: {
        trigger: "#footer .underline",
        scroller: "#main",
        start: "0% 90%", 
        end: "0% 90%",  
    }
});

gsap.from(".box h5 , .box h6",{
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger: {
        trigger: "#footer .underline",
        scroller: "#main",
        start: "0% 90%", 
        end: "0% 90%",  
    },
    onComplete:()=>{
        gsap.from(".portfolio",{
            opacity:0,
            duration:0.6
        })
    }
})


// our project

const underlines = document.querySelectorAll(".underline2");
const context_cnt = document.querySelectorAll(".context_section");
const tl = gsap.timeline()
tl.from(underlines[0],{
        width:0,
        scrollTrigger: {
            trigger: underlines[0],
            scroller: "#main",
            start: "0% 70%",
            scrub:4,
            end: "10% 70%",
         
        }
})
tl.from(context_cnt[0],{
    opacity:0,
    scrollTrigger: {
        trigger: underlines[0],
        scroller: "#main",
        start: "0% 70%",
        scrub:4,
        end: "10% 70%",
     
    }
})
tl.from(underlines[1],{
    width:0,
    scrollTrigger: {
        trigger: underlines[1],
        scroller: "#main",
        start: "45% 70%",
        end: "35% 70%",
        scrub:4,
     
    }
})

tl.from(context_cnt[1],{
    opacity:0,
    scrollTrigger: {
        trigger: underlines[1],
        scroller: "#main",
        start: "45% 70%",
        end: "35% 70%",
        scrub:4,
     
    }
}) 
tl.from(underlines[2],{
    width:0,
    scrollTrigger: {
        trigger: underlines[2],
        scroller: "#main",
        start: "85% 70%",
        end: "75% 70%",
        scrub:4,
     
    }
})
tl.from(context_cnt[2],{
    opacity:0,
    scrollTrigger: {
        trigger: underlines[2],
        scroller: "#main",
        start: "85% 70%",
        end: "75% 70%",
        scrub:4,
     
    }
}) 
tl.from(underlines[3],{
    width:0,
    scrollTrigger: {
        trigger: underlines[3],
        scroller: "#main",
        start: "bottom 70%",
        end: "95% 70%",
        scrub:4,
  
    }
})
tl.from(context_cnt[3],{
    opacity:0,
    scrollTrigger: {
        trigger: underlines[3],
        scroller: "#main",
        start: "bottom 70%",
        end: "95% 70%",
        scrub:4,
     
    }
}) 
}

// redirect to page
function redirect(){
    const target =  document.querySelectorAll('.context')
const location = ["https://scaleedge.in/",'https://thestockedge.com/','https://sundown-webpage-clone.netlify.app/','https://node.scaleedge.in/']
target.forEach((item,i)=>{
    item.addEventListener('click',(e)=>{
        window.open(location[i],'__blank')
    })
})

// socialmedia 
const singleCard = document.querySelectorAll('.box h5')
const socialLocation = ['https://www.linkedin.com/in/shubham-sharma-8a625a237/','https://www.instagram.com/shubx.__/','https://www.facebook.com/jazz.shubham.3','https://maps.app.goo.gl/box3MziAfQs2AXui6','mailto:shubhamsharma20007@gmail.com']
singleCard.forEach((item, index) => {
  item.addEventListener('click',()=>{
    window.open(socialLocation[index],"__blank")  
  })
})
}





loadingAnimation()
cursorMove()
locomotiveAnimation()
sheryAnimation()
scrollAnimation();
redirect()





