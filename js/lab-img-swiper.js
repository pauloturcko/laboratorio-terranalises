document.addEventListener('DOMContentLoaded', function () {
    new Splide('#vertical-slider', {
        type: 'slide',
        direction: 'ttb', // top to bottom
        height: '300px', // altura do slide
    }).mount();
});