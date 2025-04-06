var crsr = document.querySelector("#cursor")
var blur1 = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur1.style.left = dets.x-180 + "px"
    blur1.style.top = dets.y-180 + "px"
})

gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
       // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor: "black",
    
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
       // markers: true,
        start: "top -25%",
        end: "top -75%",
       scrub:2
    }
})