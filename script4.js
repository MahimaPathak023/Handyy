function show(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({

  el: document.querySelector("#main"),
  smooth: true,
  getDirection : true
});
locoScroll.on("scroll", ScrollTrigger.update);

// locoScroll.on("scroll", function (dets) {
//   if (dets.direction === "up") {
//       document.querySelector("#uppernav").style.top = "12%";   
//   }
//   else if (dets.direction == "down") {
//       document.querySelector("#uppernav").style.top = "-100%";
//   }
// })

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
show();
const tl1 = gsap.timeline();
const welcomeScreen = gsap.timeline({
  paused: "true",
});
tl1.from(".title", {
  duration: 0.5,
  opacity: 0,
  y: 10,
});
tl1.from(".bracket", {
  duration: 0.3,
  scale: 0,
  margin: 0,
});
tl1.from("#loader", {
  duration: 0.2,
  scale: 0,
});
tl1.from("img", {
  duration: 0.8,
  y: 150,
  opacity: 0,
  stagger: {
    amount: 1,
  },
});
tl1.from(
  ".bottom-line",
  {
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: {
      amount: 0.1,
    },
  },
  "-=.5"
);

// initializing loader
let id,
  i = 0;
function loader() {
  id = setInterval(frame, 50);
}
function frame() {
  if (i >= 100) {
    clearInterval(id);
    welcomeScreen.play();
  } else {
    i++;
    document.getElementById("loader").innerHTML = i + "%";
  }
}
window.onload = function () {
  loader();
};

// welcome screen

welcomeScreen.to(".loading-section, .loading-images-container", {
  y: -10,
  opacity: 0,
})
welcomeScreen.to(".loading-screen", {
  duration: 0.8,
  y: -2000,
  ease: "Power4.out",
});
welcomeScreen.from("#bars",{
    scaleY: 0,
    duration:0.5,
    ease: "power4.out",
    transformOrigin: "top"
})
.to("#bars",{
    scaleY:1,
    duration:1,
    ease:"power4.out",
    transformOrigin: "bottom"
})
.to("#bars", {
    height:90,
    ease: "power4.out",
    duration:0.5,
    transformOrigin:"bottom"
}).from(".welcome-screen .animate",
  {
    opacity:0,
    delay:0.5,
    y: 50,
    ease:" power4.out",
    duration: 0.5,
    stagger:0.2
  },
  "-=.8"
);

 function boxeffect(){
  const boxeffect = document.querySelector("#abovedisplay");
 const box1 = document.querySelector("#box1");
 const box2 = document.querySelector("#box2"); 
 const box3 = document.querySelector("#box3");
 const box4 = document.querySelector("#box4"); 
 const box5 = document.querySelector("#box5");
 const box6 = document.querySelector("#box6"); 
 const box7 = document.querySelector("#box7");

boxeffect.addEventListener("mousemove", function(details){
  var dimensions = this.getBoundingClientRect();
  if(details.clientX - dimensions.x < dimensions.width/2){
    box1.style.height = `45%`;
    box2.style.height = `60%`;
    box3.style.height = `52%`;
    box4.style.height = `60%`;
    box5.style.height = `42%`;
    box6.style.height = `40%`;
    box7.style.height = `25%`;
    
  }else{
    box1.style.height = `35%`;
    box2.style.height = `50%`;
    box3.style.height = `43%`;
    box4.style.height = `50%`;
    box5.style.height = `50%`;
    box6.style.height = `50%`;
    box7.style.height = `40%`;
  }
})
 }

boxeffect();

gsap.to("#pinlayerdiv1 .iteamlist", {
  scrollTrigger: {
      scroller: "#main",
      trigger: "#pinlayerdiv1",
      pin:true,
      start: "top 0%",
      scrub:2,
      duration:2,
  },
  top: "10%",
  ease: Power4,
  stagger: 1
})

gsap.to("#pinlayerdiv2 .iteamlist", {
  scrollTrigger: {
      scroller: "#main",
      trigger: "#pinlayerdiv2",
      pin:true,
      start: "top 0%",
      scrub:2,
      duration:2,
  },
  top: "10%",
  ease: Power4,
  stagger: 1
})

gsap.to("#pinlayerdiv3 .iteamlist", {
  scrollTrigger: {
      scroller: "#main",
      trigger: "#pinlayerdiv3",
      pin:true,
      start: "top 0%",
      scrub:2,
      duration:2,
  },
  top: "10%",
  ease: Power4,
  stagger: 1
})

gsap.to("#pinlayerdiv4 .iteamlist", {
  scrollTrigger: {
      scroller: "#main",
      trigger: "#pinlayerdiv4",
      pin:true,
      start: "top 0%",
      scrub:2,
      duration:2,
  },
  top: "10%",
  ease: Power4,
  stagger: 1
})

function GSAPanimation(){
  var tl3 = gsap.timeline();

tl3.from(".texta  h1",{
  opacity:0,
  y:50,
  duration:0.5,
  stagger:0.1,
  scrollTrigger: {
    scroller:"#main",
    trigger:".texta h1",
    scrub: 0.3,
  }
})
}
GSAPanimation();	

function GSAPanimation2(){
  var tl3 = gsap.timeline();

tl3.from(".texta  p",{
  opacity:0,
  y:50,
  duration:0.5,
  stagger:0.1,
  scrollTrigger: {
    scroller:"#main",
    trigger:".texta h1",
    scrub: 0.3,
  }
})
}
GSAPanimation2();	

function backgroundchange(){
  let page1 = document.querySelector("#main");
let page2 = document.querySelector("#desc");
let page3 = document.querySelector("#regiondiv");
let page4 = document.querySelector("#box4");
let page5 = document.querySelector("#box5");
let page8= document.querySelector("#page8");

page2.addEventListener("mouseenter",function(){
  page1.style.backgroundColor = `#9ab1a5`;
 })
 page2.addEventListener("mouseleave",function(){
  page1.style.backgroundColor = `gainsboro`;
   })

 page8.addEventListener("mouseenter",function(){
  page8.style.backgroundColor = `gainsboro`;
 })
 page8.addEventListener("mouseleave",function(){
  page8.style.backgroundColor = `#515c4e`;
 })
}
backgroundchange();