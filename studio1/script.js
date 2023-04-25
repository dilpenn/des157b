(function() {
    'use strict';

    const myVideo = document.querySelector('#myVideo');
    const sourceMP4 = document.querySelector('#source_mp4');
    const sourceWEBM = document.querySelector('#source_webm');
    const videosMP4 = ['media/cuddles.mp4', 'media/rolling.mp4', 'media/hug.mp4', 'media/niagara.mp4', 'media/golf.mp4', 'media/car.mp4', 'media/birthday.mp4'];
    const videosWEBM = ['media/cuddles.webm', 'media/rolling.webm', 'media/hug.webm', 'media/niagara.webm', 'media/golf.webm', 'media/car.webm', 'media/birthday.webm'];
    const loading = document.querySelector('.fa-cake-candles');
    const text = document.querySelector('#text');
    const textCollection = ['from cuddling...', '...to synchronized rolling... ', '...to more cuddling...', '...to traveling...', '...to fencing with golf clubs...', '...to messy hair car rides...', 'Happy Birthday <i class="fa-solid fa-cake-candles" id="cake">'];
    let index = 0;
    
    //start playing birthday clip
    sourceMP4.setAttribute('src', videosMP4[videosMP4.length-1]);
    sourceWEBM.setAttribute('src', videosWEBM[videosWEBM.length-1]);
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

        sourceMP4.setAttribute('src', videosMP4[index]); //update source of video to next in array
        sourceWEBM.setAttribute('src', videosWEBM[index]);
        myVideo.load();
        myVideo.play();

        text.innerHTML = textCollection[index]; //change text when video changes

        if (index >= videosMP4.length -1) {
            index = 0; //if at last video, start over
        } else {
            index++; //otherwise keep incrementing up
        }
    }
})();