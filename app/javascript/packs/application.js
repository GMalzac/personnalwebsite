import "bootstrap";
import { initUpdateNavbarOnScroll } from 'packs/navbar';
initUpdateNavbarOnScroll();
import { initUpdateNavbarLinkOnScroll } from 'packs/navbar';
initUpdateNavbarLinkOnScroll();

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Applications')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Web Interfaces')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Websites')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Landing Pages')
    .pauseFor(1500)
    .deleteAll()
    .start();
