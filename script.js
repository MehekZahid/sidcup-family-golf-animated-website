var crsr = document.querySelector("#cursor")
var blur1 = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +30+ "px"
    crsr.style.top = dets.y + "px"
    blur1.style.left = dets.x-180 + "px"
    blur1.style.top = dets.y-180 + "px"
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2.5;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});



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

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.5, //make elements appear one after another
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
    
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from(".card", {
    scale: 0.8,
  
    duration: 3,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
     
      start: "top 70%",
      end: "top 65%",
      scrub: 1.5,
    },
  });

  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      start: "top 74%",
      end: "top 70%",
      scrub: 1,
    },
  });