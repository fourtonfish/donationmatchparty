"use strict";

import ready from "./ready.js";
import {smoothScrollFn} from "./smooth-scroll.js";
import {unshiftShiftedElements} from "./helpers.js";

ready(function(){
  unshiftShiftedElements(document.getElementsByClassName('shifted'));
  smoothScrollFn();
});


window.onscroll=function(){
  var backToTop = document.getElementById('back-to-top'),
      documentScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (documentScrollTop > (screen.height/2)){
    backToTop.classList.add('slide-up');
    backToTop.classList.remove('slide-down');
  }
  else{
    backToTop.classList.remove('slide-up');
    backToTop.classList.add('slide-down');
  }
};