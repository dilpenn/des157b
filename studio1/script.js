(function() {
    'use strict';

    const myVideo = document.querySelector('#myVideo');
    const source = document.querySelector('source');
    const videos = ['media/airport-f.mp4', 'media/turbines-f.mp4', 'media/clouds.mp4'];
    const text = document.querySelector('#text');
    const textCollection = ['text1', 'text2', 'text3'];
    let index = 0;

    myVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    });

    myVideo.addEventListener('ended', changeVideo);
    function changeVideo() {
        console.log('video ended');

        source.setAttribute('src', videos[index]); //update source of video to next in array
        myVideo.load();
        myVideo.play();

        text.innerHTML = textCollection[index];

        if (index >= videos.length -1) {
            index = 0; //if at last video, reset to first video
        } else {
            index++; //otherwise keep incrementing up
        }
    }
})();