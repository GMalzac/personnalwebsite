import "bootstrap";
import { initUpdateNavbarOnScroll } from '../../assets/javascripts/components/navbar';
initUpdateNavbarOnScroll();
import { initUpdateNavbarLinkOnScroll } from '../../assets/javascripts/components/navbar';
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
