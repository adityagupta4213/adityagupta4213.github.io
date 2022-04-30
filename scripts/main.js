var mixer = mixitup('#gallery', {    
    controls: {
        enable: true
    },
    classNames: {
        block: 'portfolio'
    }
});

var scroll = new SmoothScroll('a[href*="#"]');

var contactAnchor = document.querySelector('#contact');

document.querySelector('#contact-btn').addEventListener("click", () => {
    scroll.animateScroll(contactAnchor);
})