// SCROLLMAGIC

TweenLite.defaultEase = Linear.easeNone; //animation controls should go to scrollMagic

// content images
const item = document.querySelectorAll(".item");
console.log(item);

// init controller
const controller = new ScrollMagic.Controller();


// timeline
const t1 = new TimelineMax();

// timeline sequence
t1.to('#fullview', 1, {xPercent: -33.33}); //to(selector, animation duration in sec., {animation property})
t1.from(item[0], 1, {right: 0}); //taxi

t1.to('#fullview', 1, {xPercent: -33.33}); 
t1.from(item[1], 1, {left: 0}); //bus

t1.to('#fullview', 1, {xPercent: -66.66}); 
t1.from(item[2], 1, {right: 0}); //mouse

t1.to('#fullview', 1, {xPercent: -66.66}); 
t1.from(item[3], 1.5, {right: 0}); //cheese


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
