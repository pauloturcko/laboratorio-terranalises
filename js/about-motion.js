window.sr = ScrollReveal({reset: false})

sr.reveal('.cabecalho-area', {
    duration: 1500,
    distance: '-4em',
});

sr.reveal('.timeline-component, .timeline-content', {
    duration: 1500,
    distance: '10em',
    delay: 300,
});

sr.reveal('.texto', {
    duration: 1500,
    distance: '4em',
});

sr.reveal('.mvv', {
    duration: 2000,
    rotate: {
        y: 90
    }
})