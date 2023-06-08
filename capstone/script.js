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
    t1.from(item[5], 5, {right: 40}, 'third'); //duck
    t1.from(item[6], 6, {right: 20}, 'third'); //duckling1
    t1.from(item[7], 7, {right: 0}, 'third'); //duckling2

    t1.to('#fullview', 2, {xPercent: -44.44}); 
    t1.from(item[8], 5, {right: 0}, 'fourth'); //cow
    t1.from(item[9], 3, {left: -10}, 'fourth'); //tractor

    t1.to('#fullview', 2, {xPercent: -55.55}); 
    t1.from(item[10], 4, {right: 0}, 'fifth'); //farmers market

    t1.to('#fullview', 2, {xPercent: -66.66});
    t1.from(item[11], 3, {left: 0}, 'sixth'); //doxie

    t1.to('#fullview', 2, {xPercent: -77.77});
    t1.from(item[12], 3, {bottom: -15}, 'seventh'); //grad
    t1.from(item[13], 4, {bottom: -5}, 'seventh'); //grad
    t1.from(item[14], 5, {bottom: 0}, 'seventh'); //grad

    t1.to('#fullview', 2, {xPercent: -88.88});
    // t1.from(item[10], 1, {bottom: 0}, 'seventh'); 


    //build scene
    const bike = document.querySelector('#bike');

    const scene = new ScrollMagic.Scene({
        triggerElement: '#viewport',  //element that triggers animation
        triggerHook: "onLeave",   //trigger animation on start, center, or leave of scene
        duration: "600%", //add 100% for every scene
    })
        .setPin('#viewport')
        .setTween(t1)
        // .addIndicators({
        //     colorTrigger: "blue",
        //     colorStart: "green",
        //     colorEnd: "red",
        // })
        .addTo(controller);

    // var bikescene = new ScrollMagic.Scene({triggerElement: "#bike"})
    //     .setPin("#bike")
    //     .addIndicators({name: "2 (duration: 800)"}) // add indicators (requires plugin)
    //     .addTo(controller);



    // -- BACK4APP --
    const notesDisplay = document.querySelector('#notes_display');
    const notesGrid = document.querySelector('#notes_grid');
    const noteForm = document.querySelector('#form_screen');
    const inputs = document.querySelectorAll("#form_screen input:not([type=submit])");

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

                notesGrid.append(theNoteItem);
            });    
        
        } catch (error) {
            console.error('Error while fetching notes', error);
        }
    }
    displayNotes();

    noteForm.addEventListener("submit", function(event) {
        event.preventDefault();
        addNote();
    });

    async function addNote() {
        const newNote = {};

        for (let i=0; i<inputs.length; i++) {
            let key = inputs[i].getAttribute('name');
            let value = inputs[i].value;
            newNote[key] = value;
        }
        console.log(newNote);
        
        if(newNote.description != "" && newNote.status != "" && newNote.year != "" && newNote.name != "") {
            const newNoteData = new Parse.Object('Notes');
            newNoteData.set('description', newNote.description);
            newNoteData.set('status', newNote.status);
            newNoteData.set('year', newNote.year);
            newNoteData.set('name', newNote.name);

            try {
                //add to database
                const result = await newNoteData.save();
                console.log('note created', result);
                //clear and close form
                resetFormFields();
                hideElement(noteForm);
                //update DOM
                notesDisplay.innerHTML = '';
                displayNotes();
            } catch (error) {
                console.error('Error while creating note', error);
            }

        } else {
            hideElement(noteForm);
            showElement(notesDisplay);
        }
    }

    // function clears form
    function resetFormFields() {
        document.getElementById('description').value = '';
        document.querySelector('input[name="student_status"]:checked').checked = false;
        document.getElementById('year').value = '';
        document.getElementById('name').value = '';
    }

    



    // -- BUTTONS --
    const startOver = document.querySelector('#start_over');
    const leaveNote = document.querySelectorAll('#note');
    console.log(leaveNote);
    
    const parallax = document.querySelector('#viewport');
    
    const closeOverlay = document.querySelector('#continue');
    const userTest = document.querySelector('#user_test');

    const nextButton = document.querySelectorAll('.next');
    const introOverlay = document.querySelectorAll('.intro');
    const exit = document.querySelectorAll('.exit');

    const myForm = document.querySelector('#my_form');
    // const submit = document.querySelector('#submit');
    

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

    
    // when "next" is clicked, open next overlay
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

    // close overlay that exit button corresponds to
    for (let i=0; i < introOverlay.length; i++) {
        exit[i].addEventListener('mousedown', function() {
            hideElement(introOverlay[i]);
        })
    }

    // show notes & hide form when user submits form
    // myForm.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     showElement(notesDisplay);
    //     hideElement(myForm);
    //     console.log('displaying notes');
    // });
    

    // function hides element by changing class to 'hidden'
    function hideElement(element) {
        // element.className='hidden';
        element.classList.remove('showing');
        element.classList.add('hidden');
        console.log('hide');
    };

    // function shows element by changing class to 'showing'
    function showElement(element) {
        element.classList.remove('hidden');
        element.classList.add('showing');
        // element.className='showing';
        console.log('show');
    };





})();

