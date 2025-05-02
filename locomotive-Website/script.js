document.addEventListener("contextmenu",function(dets){
    dets.preventDefault();
},false)
function loading(){

    var tl = gsap.timeline();

    tl.to("#yellow1",{
        top :"-100%",
        delay : "0.5",
        duration:0.6,
        ease:"expo.out  "
    });
    tl.from("#yellow2",{
        top :" 100%",
        delay : "0.9",
        duration:0.6,
        ease:"expo.out  "
    },"animation");
    
    tl.to(".loader h1",{
        color:"black",
        delay:0.6
    },"animation");

    tl.to(".loader",{
        opacity:0
    })

    tl.to(".loader",{
        display:"none"
    })
 
 
}
loading();




function navAnimation(){
    var navItem = document.querySelectorAll(".nav-elem a");
    var isHidden = false ;

    document.querySelector(".ri-add-line").addEventListener("click",function(){
        if(isHidden){
            navItem.forEach(function(element){
                element.style.display="block"
            })
            isHidden=false;
        }
        else{
            navItem.forEach(function(element){
                element.style.display="none"
            })
            isHidden=true
        }
    });
}
navAnimation();



function scroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    
    document.querySelector(".footer-top").addEventListener("click",()=>{
        scroll.scrollTo(0)  
    })    
}
scroll();



function bgImage(){
    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector(".page2");
    
    elems.forEach(function(element){
        element.addEventListener("mouseenter",function(){
            var bgImg = element.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgImg})`;
        });
    });    
}
bgImage();