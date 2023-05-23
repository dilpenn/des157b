// SCROLLMAGIC

TweenLite.defaultEase = Linear.easeNone; //animation controls should go to scrollMagic

// content images
const content = document.querySelectorAll(".content");

// init controller
const controller = new ScrollMagic.Controller({vertical: false});


// timeline
const t1 = new TimelineMax();

// timeline sequence
t1.to('#fullview', 0.5, {xPercent: -33}) //to(selector, animation duration in sec., {animation property})
t1.from(content[1], 0.5, {opacity: 0});

t1.to('#fullview', 0.5, {xPercent: -66}) //to(selector, animation duration in sec., {animation property})
t1.from(content[2], 0.5, {opacity: 0});


//build scene
const scene = new ScrollMagic.Scene({
    triggerElement: '#viewport',  //element that triggers animation
    triggerHook: "onLeave",   //trigger animation on start, center, or leave of scene
    duration: "200%", //add 100% for every scene
})
    .setPin('#viewport')
    .setTween(t1)
    .addIndicators({
        colorTrigger: "blue",
        colorStart: "green",
        colorEnd: "red",
    })
    .addTo(controller);
