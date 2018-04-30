import "bootstrap";
import {scrollspy} from "packs/scrollspy";
$("#nav").scrollspy({ offset: -75 });
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

$("#learnmore a").click(function(){
  var dfg = $(this).attr("href");
  console.log(dfg);
  $("html, body").animate({scrollTop: $(dfg).offset().top}, 500);
  return false;
});


