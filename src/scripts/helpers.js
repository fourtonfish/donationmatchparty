"use strict";

function unshiftShiftedElements(shiftedEls){
  if (shiftedEls.length > 0){
    Array.prototype.forEach.call(shiftedEls, function(el, index) {
      setTimeout(
        function(){
          el.classList.remove('shifted');
          el.classList.add('unshifted');
        },
        55*index*index);
    });
  }  
}

export {unshiftShiftedElements};
