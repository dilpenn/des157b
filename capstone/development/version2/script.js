(function () {
    'use strict';


//-- SCROLLMAGIC library --

TweenLite.defaultEase = Linear.easeNone; //animation controls should go to scrollMagic

// content images
const item = document.querySelectorAll(".item");
console.log(item);

// init controller
const controller = new ScrollMagic.Controller();


// timeline
const t1 = new TimelineMax();

// timeline sequence
t1.to('#fullview', 2, {xPercent: -11.11}); //to(selector, animation duration in sec., {animation property})
t1.from(item[0], 4, {right: 0}, 'first'); //dorm
t1.from(item[1], 2, {left: 0}, 'first'); //turkey

t1.to('#fullview', 2, {xPercent: -22.22}); 
t1.from(item[2], 4, {right: -20}, 'second'); //egghead
t1.from(item[3], 2, {left: -20}, 'second'); //unitrans

t1.to('#fullview', 2, {xPercent: -33.33}); 
t1.from(item[4], 3, {right: 200}, 'third'); //squirrel
t1.from(item[5], 5, {right: 0}, 'third'); //ducks

t1.to('#fullview', 2, {xPercent: -44.44}); 
t1.from(item[6], 5, {right: 0}, 'fourth'); //cow
t1.from(item[7], 3, {left: 0}, 'fourth'); //tractor

t1.to('#fullview', 2, {xPercent: -55.55}); 
t1.from(item[8], 4, {right: 0}, 'fifth'); //farmers market

t1.to('#fullview', 2, {xPercent: -66.66});
t1.from(item[9], 2, {left: 0}, 'sixth'); //doxie

t1.to('#fullview', 2, {xPercent: -77.77});
t1.from(item[10], 1, {bottom: 0}, 'seventh'); //grad

t1.to('#fullview', 2, {xPercent: -88.88});
// t1.from(item[10], 1, {bottom: 0}, 'seventh'); 


//build scene
const scene = new ScrollMagic.Scene({
    triggerElement: '#viewport',  //element that triggers animation
    triggerHook: "onLeave",   //trigger animation on start, center, or leave of scene
    duration: "400%", //add 100% for every scene
})
    .setPin('#viewport')
    .setTween(t1)
    // .addIndicators({
    //     colorTrigger: "blue",
    //     colorStart: "green",
    //     colorEnd: "red",
    // })
    .addTo(controller);



// -- BUTTONS --
const startOver = document.querySelector('#start_over');
const leaveNote = document.querySelectorAll('#note');
console.log(leaveNote);
const noteForm = document.querySelector('#form_screen');
const parallax = document.querySelector('#viewport');

// when "Start Over" is clicked, scroll back to the beginning
startOver.addEventListener('mousedown', scrollToTop);

function scrollToTop() {
    window.scrollTo(0, 0);
    console.log('to top');
};

leaveNote[0].addEventListener('mousedown', function() {
    hideElement(parallax);
    showElement(noteForm);
});

leaveNote[1].addEventListener('mousedown', function() {
    hideElement(parallax);
    showElement(noteForm);
    scrollToTop();
});

function hideElement(element) {
    element.className='hidden';
    console.log('hide');
};

function showElement(element) {
    element.className='showing';
    console.log('show');
};



})();

