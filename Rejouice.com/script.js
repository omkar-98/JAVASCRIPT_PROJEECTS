function scrollTrigger_locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
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
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
scrollTrigger_locomotive();



function cursorAnimation() {
  var cursor = document.querySelector(".cursor");
  var page1Content = document.querySelector(".page1-content");
  // gsap.set('.cursor', { xPercent: -50, yPercent: -50 });
  gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

  page1Content.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });
}
cursorAnimation();

function page2Animation() {
  gsap.from(".elem h1", {
    opacity: 0,
    y: 70,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 40%",
      end: "top 37%",
      scrub: 2,
    },
  });

  gsap.from(".small-heading", {
    y: 105,
    stagger: 0.25,
    duration: 1,
  });
}
page2Animation();

var page3 = document.querySelector(".page3-top");
function sliderAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
  });
}
sliderAnimation();










var tl = gsap.timeline();

tl.from(".Loader h2", {
  x:60,
  delay:0.7,
  duration: 1,
  stagger: 0.1,
  opacity: 0,
});

tl.to(".Loader h2", {
  opacity: 0,
  x: -60,
  stagger: 0.1,
  delay: 0.7,
});

tl.to(".Loader", {
  opacity: 0,
});

// tl.from(".nav-part1", {
//   opacity:0,
//     x: 50,
//     duration: 0.5,
//   });

tl.from(".page1 .page1-content h1 span", {
  opacity: 0,
  y: 100,
  stagger: 0.1,
  duration: 0.5,
  delay: -0.5,
});

tl.to(".Loader ", {
  display:"none",
});

gsap.from(".page7 h1 span",{
  opacity:0,
  y:-60,
  stagger:0.1,
  duration:0.8,
 scrollTrigger:{
  trigger:".page6",
  scroller:".main",
  start :"top center",
  scrub:true
 }
});