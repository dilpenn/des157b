(function() {
    'use strict';

    console.log('js');

    async function getData() {
        const myDesserts = await fetch('data/data.json');
        const data = await myDesserts.json();
        console.log(data);
        // globalData = data;
        // document.querySelector('#moods').innerHTML = outputHTML1(data);
        // document.querySelector('#picker').innerHTML = createSelectList(data);
    }

    getData();
})();
