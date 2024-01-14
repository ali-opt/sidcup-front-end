

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x -150 +"px"
    blur.style.top = dets.y -150 +"px"
})

var h4all= document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 4
    crsr.style.border ="1px solid #fff"
    crsr.style.backgroundColor = "transparent"

})
elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border= "0px solid #fff"
    crsr.style.backgroundColor = " #95C11E"
})
})






// scrolltrigger

gsap.to("#nav" , {
    backgroundColor : "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
})

gsap.to("#main" ,{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2

    }
})

gsap.from("#about-us img,#about-us-in",{
     opacity:0,
     y:50,
     stagger:0.4,
     duration:1,
     
     scrollTrigger:{
        trigger:"#about-us",
        scroll:"body",
        // opacity:1,
        start:"top 60%",
        end:"top 58%",
        scrub:2
         }

})


gsap.from(".card",{
    y:50,
    opacity:0,
    // stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:"#cards-container",
        scroll: "body",
        start:"top 70%",
        end:"top 68%",
        scrub:2

    }
})

gsap.from("#paragraph #colon1" ,{
    opacity:0,
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#paragraph",
        scroll:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2

    }
})

gsap.from("#paragraph #colon2" ,{
    opacity:0,
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#paragraph",
        scroll:"body",
        start:"left 55%",
        end:"left 45%",
        scrub:2

    }
})

gsap.from("#page4 h1" ,{
    
    y:70,
    
    scrollTrigger:{
        trigger:"#page4 h1",
        scroll:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2

    }
})