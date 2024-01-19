function show(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true,
getDirection : true
});
locoScroll.on("scroll", ScrollTrigger.update);

locoScroll.on("scroll", function (dets) {
if (dets.direction === "up") {
    document.querySelector("#uppernav").style.top = "0%";
   
    
}
else if (dets.direction == "down") {
    document.querySelector("#uppernav").style.top = "-100%";
}
})

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

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box = document.querySelector("#page7");

box1.addEventListener("mouseover",function(details){
   box.style.backgroundColor = `#bdc4bf`;
})
box2.addEventListener("mouseover",function(details){
    box.style.backgroundColor = `#7f5d41`;
})
box3.addEventListener("mouseover",function(details){
    box.style.backgroundColor = `#d4b59e`;
})
box4.addEventListener("mouseover",function(details){
    box.style.backgroundColor = `#ac7640`;
})
box5.addEventListener("mouseover",function(details){
    box.style.backgroundColor = `#515c4e`;
})

function loaderAnimation(){
  var tl = gsap.timeline();

tl.to("#title",{
  Y:-100,
  opacity:0,
  duration:0.5,
  delay:1,
  stgger:0.5
})
.to(".bars",{
 y:-1000,
 duration:2,
 stagger:0.1,
})
.to("#loadingpage",{
  opacity:0,
  y:-1000
 })

}
loaderAnimation();

       let page2 = document.querySelector("#page2");
       let page3 = document.querySelector("#page3");
       let page4 = document.querySelector("#page4");
       let page8 = document.querySelector("#page8");
       let nav = document.querySelector("#uppernav");
       page2.addEventListener("mouseenter",function(){
        page2.style.backgroundColor = `#9ab1a5`;
        page3.style.backgroundColor = `#9ab1a5`;
        nav.style.backgroundColor = `#9ab1a5`
       })
       page2.addEventListener("mouseleave",function(){
        page2.style.backgroundColor = `gainsboro`;
        page3.style.backgroundColor = `gainsboro`;
        nav.style.backgroundColor = `gainsboro`;
       })

       page4.addEventListener("mouseenter",function(){
        page4.style.backgroundColor = `gainsboro`;
        nav.style.backgroundColor = `gainsboro`;
       
       })
       page4.addEventListener("mouseleave",function(){
        page4.style.backgroundColor = `#d4b59e`;
        nav.style.backgroundColor = `#d4b59e`;
       
       })

      
       page8.addEventListener("mouseenter",function(){
        page8.style.backgroundColor = `gainsboro`;
        nav.style.backgroundColor = `gainsboro`;
       })
       page8.addEventListener("mouseleave",function(){
        page8.style.backgroundColor = `#515c4e`;
       })


   
       const navScroller = function({
        wrapperSelector: wrapperSelector = '.nav-scroller-wrapper',
        selector: selector = '.nav-scroller',
        contentSelector: contentSelector = '.nav-scroller-content',
        buttonLeftSelector: buttonLeftSelector = '.nav-scroller-btn--left',
        buttonRightSelector: buttonRightSelector = '.nav-scroller-btn--right',
        scrollStep: scrollStep = 75
      } = {}) {
    
      let scrolling = false;
      let scrollingDirection = '';
      let scrollOverflow = '';
      let timeout;
    
      let navScrollerWrapper;
    
      if (wrapperSelector.nodeType === 1) {
        navScrollerWrapper = wrapperSelector;
      }
      else {
        navScrollerWrapper = document.querySelector(wrapperSelector);
      }
      if (navScrollerWrapper === undefined || navScrollerWrapper === null) return;
    
      let navScroller = navScrollerWrapper.querySelector(selector);
      let navScrollerContent = navScrollerWrapper.querySelector(contentSelector);
      let navScrollerLeft = navScrollerWrapper.querySelector(buttonLeftSelector);
      let navScrollerRight = navScrollerWrapper.querySelector(buttonRightSelector);
    
    
      // Sets overflow
      const setOverflow = function() {
        scrollOverflow = getOverflow(navScrollerContent, navScroller);
        toggleButtons(scrollOverflow);
      }
    
    
      // Debounce setting the overflow with requestAnimationFrame
      const requestSetOverflow = function() {
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }
    
        timeout = window.requestAnimationFrame(() => {
          setOverflow();
        });
      }
    
    
      // Get overflow value on scroller
      const getOverflow = function(content, container) {
        let containerMetrics = container.getBoundingClientRect();
        let containerWidth = containerMetrics.width;
        let containerMetricsLeft = Math.floor(containerMetrics.left);
    
        let contentMetrics = content.getBoundingClientRect();
        let contentMetricsRight = Math.floor(contentMetrics.right);
        let contentMetricsLeft = Math.floor(contentMetrics.left);
    
        // Offset the values by the left value of the container
        let offset = containerMetricsLeft;
        containerMetricsLeft -= offset;
        contentMetricsRight -= offset + 1; // Due to an off by one bug in iOS
        contentMetricsLeft -= offset;
    
        // console.log (containerMetricsLeft, contentMetricsLeft, containerWidth, contentMetricsRight);
    
        if (containerMetricsLeft > contentMetricsLeft && containerWidth < contentMetricsRight) {
            return 'both';
        } else if (contentMetricsLeft < containerMetricsLeft) {
            return 'left';
        } else if (contentMetricsRight > containerWidth) {
            return 'right';
        } else {
            return 'none';
        }
      }
    
    
      // Move the scroller with a transform
      const moveScroller = function(direction) {
        if (scrolling === true) return;
    
        setOverflow();
    
        let scrollDistance = scrollStep;
        let scrollAvailable;
    
    
        if (scrollOverflow === direction || scrollOverflow === 'both') {
    
          if (direction === 'left') {
            scrollAvailable = navScroller.scrollLeft;
          }
    
          if (direction === 'right') {
            let navScrollerRightEdge = navScroller.getBoundingClientRect().right;
            let navScrollerContentRightEdge = navScrollerContent.getBoundingClientRect().right;
    
            scrollAvailable = Math.floor(navScrollerContentRightEdge - navScrollerRightEdge);
          }
    
          // If there is less that 1.5 steps available then scroll the full way
          if (scrollAvailable < (scrollStep * 1.5)) {
            scrollDistance = scrollAvailable;
          }
    
          if (direction === 'right') {
            scrollDistance *= -1;
          }
    
          navScrollerContent.classList.remove('no-transition');
          navScrollerContent.style.transform = 'translateX(' + scrollDistance + 'px)';
    
          scrollingDirection = direction;
          scrolling = true;
        }
    
      }
    
    
      // Set the scroller position and removes transform, called after moveScroller()
      const setScrollerPosition = function() {
        var style = window.getComputedStyle(navScrollerContent, null);
        var transform = style.getPropertyValue('transform');
        var transformValue = Math.abs(parseInt(transform.split(',')[4]) || 0);
    
        if (scrollingDirection === 'left') {
          transformValue *= -1;
        }
    
        navScrollerContent.classList.add('no-transition');
        navScrollerContent.style.transform = '';
        navScroller.scrollLeft = navScroller.scrollLeft + transformValue;
        navScrollerContent.classList.remove('no-transition');
    
        scrolling = false;
      }
    
    
      // Toggle buttons depending on overflow
      const toggleButtons = function(overflow) {
        navScrollerLeft.classList.remove('active');
        navScrollerRight.classList.remove('active');
    
        if (overflow === 'both' || overflow === 'left') {
          navScrollerLeft.classList.add('active');
        }
    
        if (overflow === 'both' || overflow === 'right') {
          navScrollerRight.classList.add('active');
        }
      }
    
    
      const init = function() {
    
        // Determine scroll overflow
        setOverflow();
    
        // Scroll listener
        navScroller.addEventListener('scroll', () => {
          requestSetOverflow();
        });
    
        // Resize listener
        window.addEventListener('resize', () => {
          requestSetOverflow();
        });
    
        // Button listeners
        navScrollerLeft.addEventListener('click', () => {
          moveScroller('left');
        });
    
        navScrollerRight.addEventListener('click', () => {
          moveScroller('right');
        });
    
        // Set scroller position
        navScrollerContent.addEventListener('transitionend', () => {
          setScrollerPosition();
        });
    
      };
    
      // Init is called by default
      init();
    
    
      // Reveal API
      return {
        init
      };
    };

    const navScrollerTest = navScroller();
    