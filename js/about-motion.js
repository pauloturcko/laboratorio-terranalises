window.sr = ScrollReveal({reset: false})

sr.reveal('.cabecalho-area', {
    duration: 1500,
    distance: '-4em',
});

sr.reveal('.cardOne', {
    origin: 'right',
    distance: '100%',
    duration: 1900,
    easing: 'cubic-bezier(.5,0,0,1)'
});

sr.reveal('.cardThree', {
    origin: 'right',
    distance: '100%',
    duration: 1900,
    delay: 400,
    easing: 'cubic-bezier(.5,0,0,1)'
});

sr.reveal('.cardTwo', {
    origin: 'left',
    distance: '100%',
    duration: 1900,
    delay: 200,
    easing: 'cubic-bezier(.5,0,0,1)'
});

sr.reveal('.texto', {
    duration: 1500,
    distance: '4em',
});

sr.reveal('.mvv', {
    duration: 2000,
    distance: '4em',
})