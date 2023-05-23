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
t1.to('#fullview', 2, {xPercent: -33.33}); //to(selector, animation duration in sec., {animation property})
t1.from(item[0], 2, {right: 0}, 'first'); //taxi
t1.from(item[1], 2, {left: 0}, 'first'); //bus

t1.to('#fullview', 2, {xPercent: -66.66}); 
t1.from(item[2], 3, {right: -10, delay: 1}, 'second'); //mouse
t1.from(item[3], 2, {right: 0}, 'second'); //cheese


//build scene
const scene = new ScrollMagic.Scene({
    triggerElement: '#viewport',  //element that triggers animation
    triggerHook: "onLeave",   //trigger animation on start, center, or leave of scene
    duration: "200%", //add 100% for every scene
})
    .setPin('#viewport')
    .setTween(t1)
    // .addIndicators({
    //     colorTrigger: "blue",
    //     colorStart: "green",
    //     colorEnd: "red",
    // })
    .addTo(controller);
