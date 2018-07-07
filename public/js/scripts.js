(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function unshiftShiftedElements(shiftedEls) {
  if (shiftedEls.length > 0) {
    Array.prototype.forEach.call(shiftedEls, function (el, index) {
      setTimeout(function () {
        el.classList.remove('shifted');
        el.classList.add('unshifted');
      }, 55 * index * index);
    });
  }
}

exports.unshiftShiftedElements = unshiftShiftedElements;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ready;
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

},{}],3:[function(require,module,exports){
"use strict";

var _ready = require("./ready.js");

var _ready2 = _interopRequireDefault(_ready);

var _smoothScroll = require("./smooth-scroll.js");

var _helpers = require("./helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ready2.default)(function () {
  (0, _helpers.unshiftShiftedElements)(document.getElementsByClassName('shifted'));
  (0, _smoothScroll.smoothScrollFn)();
});

window.onscroll = function () {
  var backToTop = document.getElementById('back-to-top'),
      documentScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (documentScrollTop > screen.height / 2) {
    backToTop.classList.add('slide-up');
    backToTop.classList.remove('slide-down');
  } else {
    backToTop.classList.remove('slide-up');
    backToTop.classList.add('slide-down');
  }
};

},{"./helpers.js":1,"./ready.js":2,"./smooth-scroll.js":4}],4:[function(require,module,exports){
"use strict";
/*
  https://github.com/alicelieutier/smoothScroll
  Modified by Stefan Bohacek to use the HTML5 History API.
*/

Object.defineProperty(exports, "__esModule", {
    value: true
});
function smoothScrollFn() {
    if (document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) {
        return;
    }
    var getTop = function getTop(element) {
        if (element.nodeName === 'HTML') {
            return -window.pageYOffset;
        }
        return element.getBoundingClientRect().top + window.pageYOffset;
    };
    var easeInOutCubic = function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    var position = function position(start, end, elapsed, duration) {
        if (elapsed > duration) {
            return end;
        }
        return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
    };
    var smoothScroll = function smoothScroll(el, duration, callback) {
        duration = duration || 500;
        var start = window.pageYOffset,
            end;
        if (typeof el === 'number') {
            end = parseInt(el);
        } else {
            end = getTop(el) - 50;
        }
        var clock = Date.now();
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
            window.setTimeout(fn, 15);
        };
        var step = function step() {
            var elapsed = Date.now() - clock;
            window.scroll(0, position(start, end, elapsed, duration));
            if (elapsed > duration) {
                if (typeof callback === 'function') {
                    callback(el);
                }
            } else {
                requestAnimationFrame(step);
            }
        };
        step();
    };
    var linkHandler = function linkHandler(ev) {
        ev.preventDefault();
        var hash = this.hash.substring(1);
        if (window.history && window.history.pushState) {
            history.pushState(null, null, '#' + hash);
        }
        smoothScroll(document.getElementById(hash), 500, function (el) {});
    };
    document.addEventListener("DOMContentLoaded", function () {
        var internal = document.querySelectorAll('a[href^="#"]'),
            a;
        for (var i = internal.length; a = internal[--i];) {
            a.addEventListener("click", linkHandler, false);
        }
    });
    return smoothScroll;
}

exports.smoothScrollFn = smoothScrollFn;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9oZWxwZXJzLmpzIiwic3JjL3NjcmlwdHMvcmVhZHkuanMiLCJzcmMvc2NyaXB0cy9zY3JpcHRzLmpzIiwic3JjL3NjcmlwdHMvc21vb3RoLXNjcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7OztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsVUFBaEMsRUFBMkM7QUFDekMsTUFBSSxXQUFXLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMEI7QUFDeEIsVUFBTSxTQUFOLENBQWdCLE9BQWhCLENBQXdCLElBQXhCLENBQTZCLFVBQTdCLEVBQXlDLFVBQVMsRUFBVCxFQUFhLEtBQWIsRUFBb0I7QUFDM0QsaUJBQ0UsWUFBVTtBQUNSLFdBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBb0IsU0FBcEI7QUFDQSxXQUFHLFNBQUgsQ0FBYSxHQUFiLENBQWlCLFdBQWpCO0FBQ0QsT0FKSCxFQUtFLEtBQUcsS0FBSCxHQUFTLEtBTFg7QUFNRCxLQVBEO0FBUUQ7QUFDRjs7UUFFTyxzQixHQUFBLHNCOzs7QUNmUjs7Ozs7a0JBRXdCLEs7QUFBVCxTQUFTLEtBQVQsQ0FBZSxFQUFmLEVBQW1CO0FBQ2hDLE1BQUksU0FBUyxVQUFULEtBQXdCLFNBQTVCLEVBQXNDO0FBQ3BDO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsYUFBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsRUFBOUM7QUFDRDtBQUNGOzs7QUNSRDs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBRUEscUJBQU0sWUFBVTtBQUNkLHVDQUF1QixTQUFTLHNCQUFULENBQWdDLFNBQWhDLENBQXZCO0FBQ0E7QUFDRCxDQUhEOztBQU1BLE9BQU8sUUFBUCxHQUFnQixZQUFVO0FBQ3hCLE1BQUksWUFBWSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBaEI7QUFBQSxNQUNJLG9CQUFvQixPQUFPLFdBQVAsSUFBc0IsU0FBUyxl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QUFJLE9BQU8sS0FBSyxJQUFMLENBQVUsU0FBVixDQUFvQixDQUFwQixDQUFYO0FBQ0EsWUFBSSxPQUFPLE9BQVAsSUFBa0IsT0FBTyxPQUFQLENBQWUsU0FBckMsRUFBK0M7QUFDN0Msb0JBQVEsU0FBUixDQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QixNQUFNLElBQXBDO0FBQ0Q7QUFDRCxxQkFBYSxTQUFTLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBYixFQUE0QyxHQUE1QyxFQUFpRCxVQUFTLEVBQVQsRUFBYSxDQUM3RCxDQUREO0FBRUgsS0FSRDtBQVNBLGFBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDdEQsWUFBSSxXQUFXLFNBQVMsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBZjtBQUFBLFlBQTBELENBQTFEO0FBQ0EsYUFBSSxJQUFJLElBQUUsU0FBUyxNQUFuQixFQUEyQixJQUFFLFNBQVMsRUFBRSxDQUFYLENBQTdCLEdBQTRDO0FBQ3hDLGNBQUUsZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBNEIsV0FBNUIsRUFBeUMsS0FBekM7QUFDSDtBQUNKLEtBTEQ7QUFNQSxXQUFPLFlBQVA7QUFDRDs7UUFFTyxjLEdBQUEsYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gdW5zaGlmdFNoaWZ0ZWRFbGVtZW50cyhzaGlmdGVkRWxzKXtcbiAgaWYgKHNoaWZ0ZWRFbHMubGVuZ3RoID4gMCl7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzaGlmdGVkRWxzLCBmdW5jdGlvbihlbCwgaW5kZXgpIHtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpZnRlZCcpO1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3Vuc2hpZnRlZCcpO1xuICAgICAgICB9LFxuICAgICAgICA1NSppbmRleCppbmRleCk7XG4gICAgfSk7XG4gIH0gIFxufVxuXG5leHBvcnQge3Vuc2hpZnRTaGlmdGVkRWxlbWVudHN9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlYWR5KGZuKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpe1xuICAgIGZuKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByZWFkeSBmcm9tIFwiLi9yZWFkeS5qc1wiO1xuaW1wb3J0IHtzbW9vdGhTY3JvbGxGbn0gZnJvbSBcIi4vc21vb3RoLXNjcm9sbC5qc1wiO1xuaW1wb3J0IHt1bnNoaWZ0U2hpZnRlZEVsZW1lbnRzfSBmcm9tIFwiLi9oZWxwZXJzLmpzXCI7XG5cbnJlYWR5KGZ1bmN0aW9uKCl7XG4gIHVuc2hpZnRTaGlmdGVkRWxlbWVudHMoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2hpZnRlZCcpKTtcbiAgc21vb3RoU2Nyb2xsRm4oKTtcbn0pO1xuXG5cbndpbmRvdy5vbnNjcm9sbD1mdW5jdGlvbigpe1xuICB2YXIgYmFja1RvVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stdG8tdG9wJyksXG4gICAgICBkb2N1bWVudFNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG5cbiAgaWYgKGRvY3VtZW50U2Nyb2xsVG9wID4gKHNjcmVlbi5oZWlnaHQvMikpe1xuICAgIGJhY2tUb1RvcC5jbGFzc0xpc3QuYWRkKCdzbGlkZS11cCcpO1xuICAgIGJhY2tUb1RvcC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1kb3duJyk7XG4gIH1cbiAgZWxzZXtcbiAgICBiYWNrVG9Ub3AuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtdXAnKTtcbiAgICBiYWNrVG9Ub3AuY2xhc3NMaXN0LmFkZCgnc2xpZGUtZG93bicpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAgaHR0cHM6Ly9naXRodWIuY29tL2FsaWNlbGlldXRpZXIvc21vb3RoU2Nyb2xsXG4gIE1vZGlmaWVkIGJ5IFN0ZWZhbiBCb2hhY2VrIHRvIHVzZSB0aGUgSFRNTDUgSGlzdG9yeSBBUEkuXG4qL1xuZnVuY3Rpb24gc21vb3RoU2Nyb2xsRm4oKXtcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCA9PT0gdm9pZCAwIHx8IHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gdm9pZCAwIHx8IGhpc3RvcnkucHVzaFN0YXRlID09PSB2b2lkIDApIHsgcmV0dXJuOyB9XG4gIHZhciBnZXRUb3AgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBpZihlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpe1xuICAgICAgICByZXR1cm4gLXdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfTtcbiAgdmFyIGVhc2VJbk91dEN1YmljID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ8MC41ID8gNCp0KnQqdCA6ICh0LTEpKigyKnQtMikqKDIqdC0yKSsxOyB9O1xuICB2YXIgcG9zaXRpb24gPSBmdW5jdGlvbihzdGFydCwgZW5kLCBlbGFwc2VkLCBkdXJhdGlvbikge1xuICAgICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbil7XG4gICAgICAgIHJldHVybiBlbmQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogZWFzZUluT3V0Q3ViaWMoZWxhcHNlZCAvIGR1cmF0aW9uKTsgLy8gPC0tIHlvdSBjYW4gY2hhbmdlIHRoZSBlYXNpbmcgZnVudGlvbiB0aGVyZVxuICB9O1xuICB2YXIgc21vb3RoU2Nyb2xsID0gZnVuY3Rpb24oZWwsIGR1cmF0aW9uLCBjYWxsYmFjayl7XG4gICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDUwMDtcbiAgICAgIHZhciBzdGFydCA9IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICBlbmQ7XG4gICAgICBpZiAodHlwZW9mIGVsID09PSAnbnVtYmVyJykge1xuICAgICAgICBlbmQgPSBwYXJzZUludChlbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQgPSBnZXRUb3AoZWwpIC0gNTA7XG4gICAgICB9XG4gICAgICB2YXIgY2xvY2sgPSBEYXRlLm5vdygpO1xuICAgICAgdmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICBmdW5jdGlvbihmbil7d2luZG93LnNldFRpbWVvdXQoZm4sIDE1KTt9O1xuICAgICAgdmFyIHN0ZXAgPSBmdW5jdGlvbigpe1xuICAgICAgICAgIHZhciBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGNsb2NrO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgcG9zaXRpb24oc3RhcnQsIGVuZCwgZWxhcHNlZCwgZHVyYXRpb24pKTtcbiAgICAgICAgICBpZiAoZWxhcHNlZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICAgICAgc3RlcCgpO1xuICB9O1xuICB2YXIgbGlua0hhbmRsZXIgPSBmdW5jdGlvbihldikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgIGlmICh3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpe1xuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnIycgKyBoYXNoKTtcbiAgICAgIH1cbiAgICAgIHNtb290aFNjcm9sbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKSwgNTAwLCBmdW5jdGlvbihlbCkge1xuICAgICAgfSk7XG4gIH07XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnRlcm5hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyksIGE7XG4gICAgICBmb3IodmFyIGk9aW50ZXJuYWwubGVuZ3RoOyBhPWludGVybmFsWy0taV07KXtcbiAgICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsaW5rSGFuZGxlciwgZmFsc2UpO1xuICAgICAgfVxuICB9KTtcbiAgcmV0dXJuIHNtb290aFNjcm9sbDtcbn1cblxuZXhwb3J0IHtzbW9vdGhTY3JvbGxGbn07XG4iXX0=
