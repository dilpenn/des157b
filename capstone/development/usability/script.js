(function () {
    'use strict';

    // Connect to BACK4APP
    Parse.initialize("nFHx5bygiCqJh3EEYWWtXsPDIjt98NzKDu9u55EK","S5gdbPFPdYjtWHznvdXTKalqv1vPfr6KPxsgy5PF"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'


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
    t1.from(item[3], 2, {left: -30}, 'second'); //unitrans

    t1.to('#fullview', 2, {xPercent: -33.33}); 
    t1.from(item[4], 3, {right: 200}, 'third'); //squirrel
    t1.from(item[5], 5, {right: 0}, 'third'); //ducks

    t1.to('#fullview', 2, {xPercent: -44.44}); 
    t1.from(item[6], 5, {right: 0}, 'fourth'); //cow
    t1.from(item[7], 3, {left: -10}, 'fourth'); //tractor

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



    // -- BACK4APP --
    const notesDisplay = document.querySelector('#notes_display');

    async function displayNotes() {
        const notes = Parse.Object.extend('Notes');
        const query = new Parse.Query(notes);
        
        try {
            const results = await query.ascending('description').find();
            console.log(results);

            results.forEach(function(eachNote) {
                const id = eachNote.id;
                const description = eachNote.get('description');
                const status = eachNote.get('status');
                const year = eachNote.get('year');
                const name = eachNote.get('name');

                const theNoteItem = document.createElement("div");
                theNoteItem.setAttribute("class", `user_note`);
                theNoteItem.setAttribute("id", `r-${id}`);
                theNoteItem.innerHTML = `
                <p class="description">"${description}"</p>
                <p class="status">${status}</p>
                <p class="year">Class of ${year}</p>
                <p class="name">-${name}</p> 
                `;

                notesDisplay.append(theNoteItem);
            });    
        
        } catch (error) {
            console.error('Error while fetching notes', error);
        }
    }
    displayNotes();



    // -- BUTTONS --
    const startOver = document.querySelector('#start_over');
    const leaveNote = document.querySelectorAll('#note');
    console.log(leaveNote);
    const noteForm = document.querySelector('#form_screen');
    const parallax = document.querySelector('#viewport');
    
    const closeOverlay = document.querySelector('#continue');
    const userTest = document.querySelector('#user_test');

    const nextButton = document.querySelectorAll('.next');
    const introOverlay = document.querySelectorAll('.intro');

    const myForm = document.querySelector('#my_form');
    const submit = document.querySelector('#submit');


    // when "Start Over" is clicked, scroll back to the beginning
    startOver.addEventListener('mousedown', scrollToTop);

    function scrollToTop() {
        window.scrollTo(0, 0);
        console.log('to top');
    };

    // when "Davis is my Home bc..." is clicked, show form and hide parallax interface
    leaveNote[0].addEventListener('mousedown', function() {
        hideElement(parallax);
        showElement(noteForm);
    });

    leaveNote[1].addEventListener('mousedown', function() {
        hideElement(parallax);
        showElement(noteForm);
        scrollToTop();
    });

    // when "Let's go!" is clicked, close user test overlay
    closeOverlay.addEventListener('mousedown', function() {
        hideElement(userTest);
        showElement(introOverlay[0]);
    });

    nextButton[0].addEventListener('mousedown', function() {
            hideElement(introOverlay[0]);
            showElement(introOverlay[1]);
    });

    nextButton[1].addEventListener('mousedown', function() {
        hideElement(introOverlay[1]);
        showElement(introOverlay[2]);
    });

    nextButton[2].addEventListener('mousedown', function() {
        hideElement(introOverlay[2]);
        showElement(introOverlay[3]);
    });

    nextButton[3].addEventListener('mousedown', function() {
        hideElement(introOverlay[3]);
    });

    // for (let i=1; i < introOverlay.length; i++) {

    // }

    // show notes & hide form when user submits form
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        showElement(notesDisplay);
        hideElement(myForm);
        console.log('displaying notes');
    });
    

    // function hides element by changing class to 'hidden'
    function hideElement(element) {
        element.className='hidden';
        console.log('hide');
    };

    // function shows element by changing class to 'showing'
    function showElement(element) {
        element.className='showing';
        console.log('show');
    };





})();

