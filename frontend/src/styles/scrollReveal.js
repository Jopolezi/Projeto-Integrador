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
        ScrollReveal().reveal('.revealLeft', revealLeft);
        ScrollReveal().reveal('.revealRight', revealRight);
        ScrollReveal().reveal('.revealBom', revealBottom);
        ScrollReveal().reveal('.revealTop', revealTop);
        ScrollReveal().reveal('.revealFade', revealFade);
    }, []);

    return null;
}