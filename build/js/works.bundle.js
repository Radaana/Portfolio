"use strict";!function(c){function g(I){if(n[I])return n[I].exports;var l=n[I]={exports:{},id:I,loaded:!1};return c[I].call(l.exports,l,l.exports,g),l.loaded=!0,l.exports}var n={};g.m=c,g.c=n,g.p="/build/",g(0)}({0:function _(module,exports,__webpack_require__){eval("let ham = __webpack_require__ (5);\r\nlet blur = __webpack_require__ (8);\r\n\r\n\r\nham.init();\r\nblur.init();\r\n\r\nwindow.onresize = function () {\r\n    blur.init();\r\n}\r\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvd29ya3MuanM/NmZjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGhhbSA9IHJlcXVpcmUgKCcuL21vZHVsZXMvaGFtYnVyZ2VyJyk7XHJcbmxldCBibHVyID0gcmVxdWlyZSAoJy4vbW9kdWxlcy9ibHVyJyk7XHJcblxyXG5cclxuaGFtLmluaXQoKTtcclxuYmx1ci5pbml0KCk7XHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBibHVyLmluaXQoKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy93b3Jrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9")},5:function _(module,exports){eval("let ham = {\r\n    init() {\r\n        let hamburger = document.getElementById('hamburger-menu');\r\n        // let close = document.getElementByClassName('hamburger-menu--close');\r\n        let nav = document.getElementsByClassName('fullscreen')[0];\r\n        let navItem = nav.getElementsByClassName('nav__link');\r\n        let wrapper = document.getElementsByClassName('header__menu')[0];\r\n        let body = document.getElementsByTagName('body')[0];\r\n        let animation = false;\r\n\r\n        wrapper.addEventListener('click', e => {\r\n          e.preventDefault();\r\n          // console.log('test');\r\n          if (hamburger.classList.contains('hamburger-menu--close')) {\r\n            // nav.classList.add('visually-hidden');\r\n            nav.classList.remove('fullscreen--shown');\r\n            hamburger.classList.remove('hamburger-menu--close');\r\n            wrapper.classList.remove('header__menu--fixed');\r\n            body.classList.remove('overflow-hidden');\r\n\r\n          } else {\r\n            // nav.classList.remove('visually-hidden');\r\n            nav.classList.add('fullscreen--shown');\r\n            hamburger.classList.add('hamburger-menu--close');\r\n            wrapper.classList.add('header__menu--fixed');\r\n            body.classList.add('overflow-hidden');\r\n          }\r\n        }); // hamburger END\r\n      \r\n        for (var i = navItem.length - 1; i >= 0; i--) {\r\n          navItem[i].addEventListener('click', e => { \r\n            // e.preventDefault();\r\n            // nav.classList.add('visually-hidden');\r\n            nav.classList.remove('fullscreen--shown');\r\n            hamburger.classList.remove('hamburger-menu--close');\r\n            wrapper.classList.remove('header__menu--fixed');\r\n            body.classList.remove('overflow-hidden');\r\n          })\r\n        } // navItem END\r\n    }\r\n}\r\n\r\nmodule.exports = ham;\r\n\r\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9oYW1idXJnZXIuanM/ZDVhMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7O0FBRVgsd0NBQXdDLFFBQVE7QUFDaEQscUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7O0FBRUEiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBoYW0gPSB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGxldCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyLW1lbnUnKTtcclxuICAgICAgICAvLyBsZXQgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlDbGFzc05hbWUoJ2hhbWJ1cmdlci1tZW51LS1jbG9zZScpO1xyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmdWxsc2NyZWVuJylbMF07XHJcbiAgICAgICAgbGV0IG5hdkl0ZW0gPSBuYXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X19saW5rJyk7XHJcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXJfX21lbnUnKVswXTtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGVzdCcpO1xyXG4gICAgICAgICAgaWYgKGhhbWJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hhbWJ1cmdlci1tZW51LS1jbG9zZScpKSB7XHJcbiAgICAgICAgICAgIC8vIG5hdi5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGxzY3JlZW4tLXNob3duJyk7XHJcbiAgICAgICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdoYW1idXJnZXItbWVudS0tY2xvc2UnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnUtLWZpeGVkJyk7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnZnVsbHNjcmVlbi0tc2hvd24nKTtcclxuICAgICAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1tZW51LS1jbG9zZScpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbWVudS0tZml4ZWQnKTtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTsgLy8gaGFtYnVyZ2VyIEVORFxyXG4gICAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gbmF2SXRlbS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgbmF2SXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4geyBcclxuICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBuYXYuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsc2NyZWVuLS1zaG93bicpO1xyXG4gICAgICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGFtYnVyZ2VyLW1lbnUtLWNsb3NlJyk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51LS1maXhlZCcpO1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IC8vIG5hdkl0ZW0gRU5EXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaGFtO1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kdWxlcy9oYW1idXJnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyJdLCJzb3VyY2VSb290IjoiIn0=")},8:function _(module,exports){eval("let blur =  {\r\n    init() {\r\n        let wrapper = document.querySelector('.contact-me');\r\n        let form = document.querySelector('.contact-me__bg');\r\n        let background = document.querySelector('.speaking__bg');\r\n        let imgWidth = background.offsetWidth;\r\n        let imgHeight = background.offsetHeight;\r\n        let posLeft = -wrapper.offsetLeft;\r\n        // let posTop = -wrapper.offsetTop;\r\n        \r\n\r\n        let imgTop = background.offsetTop;\r\n        let posTop = -(wrapper.offsetTop - imgTop);\r\n\r\n        let blurCSS = form.style;\r\n        blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';\r\n        // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + -imgHeight + 'px';\r\n        blurCSS.backgroundPosition = posLeft + 'px' + ' ' + (posTop+187) + 'px';\r\n        // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + '-100px';\r\n        // blurCSS.backgroundPosition = (posLeft ) + 'px' + ' ' + 'bottom';\r\n \r\n    }\r\n    \r\n}\r\n\r\nmodule.exports = blur;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9ibHVyLmpzPzJjOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGJsdXIgPSAge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LW1lJyk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1tZV9fYmcnKTtcclxuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVha2luZ19fYmcnKTtcclxuICAgICAgICBsZXQgaW1nV2lkdGggPSBiYWNrZ3JvdW5kLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGxldCBpbWdIZWlnaHQgPSBiYWNrZ3JvdW5kLm9mZnNldEhlaWdodDtcclxuICAgICAgICBsZXQgcG9zTGVmdCA9IC13cmFwcGVyLm9mZnNldExlZnQ7XHJcbiAgICAgICAgLy8gbGV0IHBvc1RvcCA9IC13cmFwcGVyLm9mZnNldFRvcDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IGltZ1RvcCA9IGJhY2tncm91bmQub2Zmc2V0VG9wO1xyXG4gICAgICAgIGxldCBwb3NUb3AgPSAtKHdyYXBwZXIub2Zmc2V0VG9wIC0gaW1nVG9wKTtcclxuXHJcbiAgICAgICAgbGV0IGJsdXJDU1MgPSBmb3JtLnN0eWxlO1xyXG4gICAgICAgIGJsdXJDU1MuYmFja2dyb3VuZFNpemUgPSBpbWdXaWR0aCArICdweCcgKyAnICcgKyAnYXV0byc7XHJcbiAgICAgICAgLy8gYmx1ckNTUy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwb3NMZWZ0ICsgJ3B4JyArICcgJyArIC1pbWdIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIGJsdXJDU1MuYmFja2dyb3VuZFBvc2l0aW9uID0gcG9zTGVmdCArICdweCcgKyAnICcgKyAocG9zVG9wKzE4NykgKyAncHgnO1xyXG4gICAgICAgIC8vIGJsdXJDU1MuYmFja2dyb3VuZFBvc2l0aW9uID0gcG9zTGVmdCArICdweCcgKyAnICcgKyAnLTEwMHB4JztcclxuICAgICAgICAvLyBibHVyQ1NTLmJhY2tncm91bmRQb3NpdGlvbiA9IChwb3NMZWZ0ICkgKyAncHgnICsgJyAnICsgJ2JvdHRvbSc7XHJcbiBcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJsdXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kdWxlcy9ibHVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=")}});