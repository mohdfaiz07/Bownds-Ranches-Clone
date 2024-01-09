function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


init()

//////////////////////page1////////////////////////

var overlay = document.querySelector("#overlay");

var iscroll = document.querySelector("#scroll");


overlay.addEventListener("mouseenter", function(){
    iscroll.style.scale = 1
})


overlay.addEventListener("mouseleave", function(){
    iscroll.style.scale = 0
})


overlay.addEventListener("mousemove",function(dets){
    iscroll.style.left = `${dets.x-55}px`
    iscroll.style.top = `${dets.y-55}px`
})


$('#page1 h1').textillate({
    in: {
        effect: 'fadeInUp',
        delayScale: 1,
    }
});


////////////////////page2/////////////////


gsap.to("#page2 img",{
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"#main",
        start:"top 50%",
        scrub:3

    },

    rotate:5,
 
    

})


//////////////////////page3////////////////////////


var page3_Overlay = document.querySelector("#page3-overlay");
var imgDiv = document.querySelector("#img-div");

page3_Overlay.addEventListener("mouseenter",function(){
  imgDiv.style.scale = 1
})


page3_Overlay.addEventListener("mouseleave",function(){
  imgDiv.style.scale = 0
})


page3_Overlay.addEventListener("mousemove",function(dets){
  imgDiv.style.left = `${dets.x -50}px`
  imgDiv.style.top = `${dets.y -50}px`



})





////////////////////////page4////////////////////


var elem = document.querySelectorAll(".elem")

elem.forEach(function(e){

var a = e.getAttribute("data-img");
e.addEventListener("mouseenter",function(){
  document.querySelector("#page4>img").setAttribute("src",a)

})

 
})

var page4 = document.querySelector("#page4");

var page4_img = document.querySelector("#page4>img");


page4.addEventListener("mouseenter", function(dets){
  page4_img.style.left = `${dets.x-40} px`
  page4_img.style.top = `${dets.y-40} px`

})



//////////////////gsap start page6//////////////////




// gsap.from("#page6",{

//   scrollTrigger:{
//     trigger: "#page6",
//     scroller : "#main",
//     start : " top 0",
//     end : "top -100%",   
//     pin: true,
//     scrub: true

//   }

// })


// gsap.from("#page6-img1",{
//   rotate : -5,
//   y : 200,

//   scrollTrigger:{
//     trigger: "#page6-img1",
//     scroller : "#main",
//     start : "top 90%",
//     end : "top 30%",
//     scrub: true,


//   }

// })



// gsap.from("#page6-img2",{
//   rotate : -10,
//   y : 700,
//   scrollTrigger:{
//     trigger: "#page6-img2",
//     scroller : "#main",
//     start : "top 90%",
//     end : "top 30%",
//     scrub: true

//   }

// })



var pg6 = gsap.timeline({

    scrollTrigger:{
      trigger: "#page6",
      scroller: "#main",
      start: "top 0",
      end : "top -100%",
      pin: true,
      scrub: true
    }

})

pg6.from("#page6-img1",{

  y : 200,
  rotate : 5

})


pg6.from("#page6-img2",{

  y : 600,
  rotate : 5,
  scrollTriger:{
    
    scrub: 4
  }

})





