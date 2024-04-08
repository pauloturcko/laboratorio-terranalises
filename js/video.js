var video = document.getElementById('bacground-video');
video.addEventListener('ended', function() {
    video.play();
});