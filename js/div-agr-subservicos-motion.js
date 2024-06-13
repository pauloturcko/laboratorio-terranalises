window.sr = ScrollReveal({reset: false})

sr.reveal('.cabecalho-area', {
    duration: 1500,
    distance: '-4em',
});

sr.reveal('.motionCardOne', {
    origin: 'left',
    distance: '100%',
    duration: 1900,
    easing: 'cubic-bezier(.5,0,0,1)'
});

sr.reveal('.motionCardTwo', {
    origin: 'right',
    distance: '100%',
    duration: 1900,
    easing: 'cubic-bezier(.5,0,0,1)'
});

sr.reveal('.beneficio-card', {
    duration: 1500,
    distance: '4em',
});
