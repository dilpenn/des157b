(function() {
    'use strict';

    const myVideo = document.querySelector('#myVideo');
    const source = document.querySelector('source');
    const videos = ['media/cuddles.mp4', 'media/rolling.mp4', 'media/hug.mp4', 'media/niagara.mp4', 'media/golf.mp4', 'media/car.mp4', 'media/birthday.mp4'];
    const loading = document.querySelector('.fa-cake-candles');
    const text = document.querySelector('#text');
    const textCollection = ['from cuddling...', '...to synchronized rolling... ', '...to more cuddling...', '...to traveling...', '...to fencing with golf clubs...', '...to messy hair car rides...', 'Happy Birthday <i class="fa-solid fa-cake-candles" id="cake">'];
    let index = 0;
    
    //start playing birthday clip
    source.setAttribute('src', videos[videos.length-1]);
    myVideo.load();
    myVideo.play();
    text.innerHTML = textCollection[textCollection.length-1];

    // when video playing, do not display loading icon
    myVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    });
    
    
    myVideo.addEventListener('ended', changeVideo);
    
    function changeVideo() {
        console.log('video ended');

        source.setAttribute('src', videos[index]); //update source of video to next in array
        myVideo.load();
        myVideo.play();

        text.innerHTML = textCollection[index]; //change text when video changes

        if (index >= videos.length -1) {
            index = 0; //if at last video, stay
        } else {
            index++; //otherwise keep incrementing up
        }
    }
})();