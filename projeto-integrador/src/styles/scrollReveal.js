import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

ScrollReveal({ reset: false })

const revealLeft = {
    delay: 500,
    distance: '20%',
    origin: 'left'
};

const revealRight = {
    delay: 500,
    distance: '20%',
    origin: 'right'
}

const revealTop = {
    delay: 500,
    distance: '20%',
    origin: 'top',
}

const revealBottom = {
    delay: 500,
    distance: '20%',
    origin: 'bottom'
}

const revealFade = {
    delay: 500
}


export default function ScrollRevealComponent() {
    useEffect(() => {
        ScrollReveal().reveal('.reveal-left', revealLeft);
        ScrollReveal().reveal('.reveal-right', revealRight);
        ScrollReveal().reveal('.reveal-bottom', revealBottom);
        ScrollReveal().reveal('.reveal-top', revealTop);
        ScrollReveal().reveal('.reveal-fade', revealFade);
    }, []);

    return null;
}