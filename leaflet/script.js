(function(){
    'use strict';
 
    //link to HTML #map element, set default start coordinates and zoom
    var map = L.map('map').setView([38.546719, -121.744339], 13);  
    
    //add OpenStreetMap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' //attribution for copyright
    }).addTo(map);

    //add a marker (specify coordinates)
    var marker1 = L.marker([38.539514, -121.740310]).addTo(map);
    var marker2 = L.marker([38.543010, -121.751618]).addTo(map);

    //add a circle (specify radius in meters)
    var circle = L.circle([38.565581, -121.763180], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 200
    }).addTo(map);


    //add a polygon (specify coordinates of each corner)
    // var polygon = L.polygon([
    //     [51.509, -0.08],
    //     [51.503, -0.06],
    //     [51.51, -0.047]
    // ]).addTo(map);


    //popups for each element  ('bindPopup' method attaches it to specified marker)
    marker1.bindPopup("<b>Icekrimski Cafe</b><br>I'm lactose intolerant but the gelato here is too good to avoid.").openPopup();
    marker2.bindPopup("<b>Student Community Center</b><br>This past year the SCC has felt like a second home. I spend most of my time on campus here.").openPopup();
    circle.bindPopup("<b>Senda Nueva Greenbelt</b><br>I sometimes take walks here to take a break. Occasionally, I'll sit and snack on one of the benches as I watch the dogs play on the grass or try to spot a stray cat passing by.");


    // polygon.bindPopup("I am a polygon.");

    //standalone popup
    // var popup = L.popup()
    // .setLatLng([51.513, -0.09])
    // .setContent("I am a standalone popup.")
    // .openOn(map);


    //popup w/ coordinates appears when user clicks
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
}());

