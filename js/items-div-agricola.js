window.onload = function() {
    var items = document.querySelectorAll('.sub-servicos-bt');
    var delay = 100;

    for (var i = 0; i < items.length; i++) {
        items[i].style.transitionDelay = delay * i + 'ms';
        items[i].style.opacity = '1';
    }
}
