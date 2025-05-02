function imageAnimation() {

    var rightElem = document.querySelectorAll(".right-elem");
    rightElem.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            gsap.to(element.childNodes[3], {
                opacity: 1,
                scale: 1
            });
        });

        element.addEventListener("mouseleave", function () {
            gsap.to(element.childNodes[3], {
                opacity: 0,
                scale: 0
            });
        });

        element.addEventListener("mousemove", function (dets) {
            gsap.to(element.childNodes[3], {
                x: dets.x - element.getBoundingClientRect().x - 50,
                y: dets.y - element.getBoundingClientRect().y - 129
            })
        })
    })

}
imageAnimation();


function page3Animation(){
    var video = document.querySelector(".page3 video");
    var page3Button = document.querySelector(".page3-center");
    page3Button.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            opacity:1,
            transform:"scaleX(1) scaleY(1)",
            borderRadius:0
        })
    });
    
    video.addEventListener("click",function(){
        video.pause();
        gsap.to(video,{
            opacity:0,
            transform:"scaleX(0.7) scaleY(0)",
            borderRadius:"30px"
        })
    
    })
}

page3Animation();