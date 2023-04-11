(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    // const banner = document.querySelector('#banner');
    const eggBanner = document.querySelector('#egg_banner');
    const coffeeBanner = document.querySelector('#coffee_banner');
    const sections = document.querySelectorAll('section')
    const sectionText = document.querySelectorAll('section nav');
    let mode = 'coffee';

    button.addEventListener('click', function() {
        if (mode === 'coffee') {
            body.className = 'switch';
            // banner.className = 'switch';
            eggBanner.className = 'hidden';
            coffeeBanner.className = 'showing';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'egg';
        } else {
            body.removeAttribute('class');
            // banner.removeAttribute('class');
            eggBanner.className = 'showing';
            coffeeBanner.className = 'hidden';
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'coffee'
        }
    })

    //needs fixing
    for (const section of sections) {
        section.addEventListener('mouseover', function() {
            // console.log('hovering');
            section.style.backgroundImage = 'none';
            section.querySelector('nav').className = 'showing';  
        })
        //return back to default hovering  
        section.addEventListener('mouseout', function() {
            // console.log('not');
            section.style.backgroundImage = "url('images/egg_top.png')";
            section.querySelector('nav').className = 'hidden';
            if (mode === 'egg') {
                section.style.backgroundImage = "url('images/coffee_top.png')";
            }
        })
    }


    // this method doesn't work

    // for (let i; i<sections.length; i++) {
    //     sections[i].addEventListener('click', function() {
    //         console.log('hovering');
    //         for (let j; j<sectionText.length; j++) {
    //             sectionText[j].className = 'showing';
    //         }
    //     })
    // }
    
})()