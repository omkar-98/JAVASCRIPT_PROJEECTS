const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var cursor = document.querySelector(".cursor");
var mainDiv = document.querySelector(".main");
var timeout;


var navBar = document.querySelector(".nav");
var boundElement = document.getElementsByClassName("boundElem");
var heroFooter = document.getElementById("#hero-end1");

function animateFirstPage() {
    var timelin = gsap.timeline()
    timelin.from(navBar, {
        y: -10,
        duration: 1.5,
        opacity: 0,
        ease: "expo.InOut"
    });

    timelin.to(boundElement, {
        y: 0,
        duration: 1.3,
        ease: "Expo.InOut",
        stagger: 0.2,
        delay: -.5
    });
}

animateFirstPage();

function squizCircle() {
    // var xScale = 1 ;
    // var yScale = 1 ;

    // var xPrev = 0;
    // var yPrev = 0;

    // window.addEventListener("mousemove",function(dets){
    //     xScale = gsap.utils.clamp(0.8 ,1.2 ,dets.clientX - xPrev );
    //     yScale = gsap.utils.clamp(0.8 ,1.2 ,dets.clientY - yPrev );

    //     xPrev = dets.clientX ;
    //     yPrev = dets.clientY;


    //     cursorMovement(xScale ,yScale);
    // });



    var xScale = 1;
    var yScale = 1;

    var xPrev = 0;
    var yPrev = 0;

    window.addEventListener("mousemove", function (dets) {

        this.clearTimeout(timeout);


        xScale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xPrev);
        yScale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yPrev);

        xPrev = dets.clientX;
        yPrev = dets.clientY;

        cursorMovement(xScale, yScale);

        timeout = setTimeout(function () {
            this.document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1,1})`;

        }, 100)
    })
}
squizCircle();

function cursorMovement(xScale, yScale) {
    // gsap.set(".cursor",{xPercent : -50 , yPercent : -50});

    // mainDiv.addEventListener("mouseenter",function(){
    //     gsap.to(cursor,{
    //         opacity:1,
    //         scale:1
    //     });
    // });
    // mainDiv.addEventListener("mousemove",function(dets){
    //     gsap.to(cursor,{
    //         x:dets.x,
    //         y:dets.y
    //     });


    // });
    // mainDiv.addEventListener("mouseleave",function(){
    //     gsap.to(cursor,{
    //         opacity:0,
    //         scale:0
    //     });
    // });



    window.addEventListener("mousemove", function (dets) {
        // document.querySelector(".cursor").style.transform = `translate (${dets.clientX})px , ${dets.clientY})`;

        this.document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xScale, yScale})`;
    });
}
cursorMovement();



document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrotate = 0;

    elem.addEventListener("mousemove",function(dets){
         diffrotate = dets.clientX - rotate;
       var diff =dets.clientY - elem.getBoundingClientRect().top;
       rotate = dets.clientX;
       gsap.to(elem.querySelector("img"),{
            opacity :1 ,
            ease :Power3,
            top:diff,
            left : dets.clientX,
            rotate:gsap.utils.clamp(-40 , 40 , diffrotate )
        });
    });
});



document.querySelectorAll(".elem").forEach(function(elem){
    
    elem.addEventListener("mouseleave",function(dets){
       gsap.to(elem.querySelector("img"),{
            opacity :0,
            ease :Power3
        });
    });
});



document.querySelector("#elemLast").forEach(function(elem){
    var rotate = 0;
    var diffrotate = 0;

    elem.addEventListener("mousemove",function(dets){
         diffrotate = dets.clientX - rotate;
       var diff =dets.clientY - elem.getBoundingClientRect().top;
       rotate = dets.clientX;
       gsap.to(elem.querySelector("img"),{
            opacity :1 ,
            ease :Power3,
            top:diff,
            left : dets.clientX,
            rotate:gsap.utils.clamp(-40 , 40 , diffrotate )
        });
    });
});

document.querySelector(".#elemLast").forEach(function(elem){
    
    elem.addEventListener("mouseleave",function(dets){
       gsap.to(elem.querySelector("img"),{
            opacity :0
        });
    });
});
