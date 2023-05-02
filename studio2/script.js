(function() {
    'use strict';

    console.log('js');

    let globalData;

    async function getData() {
        const myDesserts = await fetch('data/data.json');
        const data = await myDesserts.json();
        // console.log(data);
        globalData = data;
    }


    const dataPoints = document.querySelectorAll('.empty_dot');  //collection of all data points (on timeline)
    
    for (const dataPoint of dataPoints) {
        dataPoint.addEventListener('click', function() {  //if one of data points are clicked
            // console.log(dataPoint);
            const dataPointID = dataPoint.getAttribute('id');  //grab id of data point clicked
            // console.log(dataPointID);
            updateInterface(dataPointID, globalData);
        })    
    }

    // update: center image, description, & time
    function updateInterface(point, jsonData) {
        let img = document.querySelector('#dessert_img');
        let description = document.querySelector('#description');
        let time = document.querySelector('#time');

        img.src = `images/${jsonData[point].image}`;  //display image of dessert
        description.innerHTML = `${jsonData[point].amount}x ${jsonData[point].dessert}`;  //display amount and type of dessert
        time.innerHTML = `${jsonData[point].time}`  //display time dessert was eaten
    }
    

    getData();
})();
