gsap.to(".nav",{
    backgroundColor :"#000",
    height : "104px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:true,
        start : "top -10%",
        end:"top -11%",
        scrub:1
    }
});

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start :"top -50%",
        end : "top 80%",
        scrub:2
    }
});


var blur = document.querySelector(".cursor-blur");
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",function(dets){
    cursor.style.left =dets.x+"px";
    cursor.style.top = dets.y +"px" ;
    blur.style.left = dets.x -150 +"px";
    blur.style.top = dets.y -150 +"px";
})    
    
