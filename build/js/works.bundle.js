"use strict";!function(c){function g(n){if(I[n])return I[n].exports;var l=I[n]={exports:{},id:n,loaded:!1};return c[n].call(l.exports,l,l.exports,g),l.loaded=!0,l.exports}var I={};g.m=c,g.c=I,g.p="/build/",g(0)}([function(module,exports,__webpack_require__){eval("let ham = __webpack_require__ (1);\r\nlet blur = __webpack_require__ (2);\r\n\r\n\r\nham.init();\r\nblur.init();\r\n\r\nwindow.onresize = function () {\r\n    blur.init();\r\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvd29ya3MuanM/NmZjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGhhbSA9IHJlcXVpcmUgKCcuL21vZHVsZXMvaGFtYnVyZ2VyJyk7XHJcbmxldCBibHVyID0gcmVxdWlyZSAoJy4vbW9kdWxlcy9ibHVyJyk7XHJcblxyXG5cclxuaGFtLmluaXQoKTtcclxuYmx1ci5pbml0KCk7XHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBibHVyLmluaXQoKTtcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3dvcmtzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=")},function(module,exports){eval("let ham = {\r\n    init() {\r\n        let hamburger = document.getElementById('hamburger-menu');\r\n        // let close = document.getElementByClassName('hamburger-menu--close');\r\n        let nav = document.getElementsByClassName('fullscreen')[0];\r\n        let navItem = nav.getElementsByClassName('nav__link');\r\n        let wrapper = document.getElementsByClassName('header__menu')[0];\r\n        let body = document.getElementsByTagName('body')[0];\r\n        \r\n      \r\n        hamburger.addEventListener('click', e => {\r\n          e.preventDefault();\r\n          // console.log('test');\r\n          if (hamburger.classList.contains('hamburger-menu--close')) {\r\n            nav.classList.add('visually-hidden');\r\n            hamburger.classList.remove('hamburger-menu--close');\r\n            wrapper.classList.remove('header__menu--fixed');\r\n            body.classList.remove('overflow-hidden');\r\n          } else {\r\n            nav.classList.remove('visually-hidden');\r\n            hamburger.classList.add('hamburger-menu--close');\r\n            wrapper.classList.add('header__menu--fixed');\r\n            body.classList.add('overflow-hidden');\r\n          }\r\n        }); // hamburger END\r\n      \r\n        for (var i = navItem.length - 1; i >= 0; i--) {\r\n          navItem[i].addEventListener('click', e => { \r\n            // e.preventDefault();\r\n            nav.classList.add('visually-hidden');\r\n            hamburger.classList.remove('hamburger-menu--close');\r\n            wrapper.classList.remove('header__menu--fixed');\r\n            body.classList.remove('overflow-hidden');\r\n          })\r\n        } // navItem END\r\n    }\r\n}\r\n\r\nmodule.exports = ham;\r\n\r\n// function Module2(id) {\r\n//     this.element = document.getElementById(id);\r\n// }\r\n \r\n// Module2.prototype.ChangeText2 = function () {\r\n//     this.element.innerHTML = 'А я модуль номер два и вывожу привет в консоле... ';\r\n//     console.log('Здравствуй, Мир');\r\n// };\r\n\r\n// module.exports = Module2;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9oYW1idXJnZXIuanM/ZDVhMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7O0FBRVgsd0NBQXdDLFFBQVE7QUFDaEQscUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGhhbSA9IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXItbWVudScpO1xyXG4gICAgICAgIC8vIGxldCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUNsYXNzTmFtZSgnaGFtYnVyZ2VyLW1lbnUtLWNsb3NlJyk7XHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Z1bGxzY3JlZW4nKVswXTtcclxuICAgICAgICBsZXQgbmF2SXRlbSA9IG5hdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZfX2xpbmsnKTtcclxuICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbWVudScpWzBdO1xyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGVzdCcpO1xyXG4gICAgICAgICAgaWYgKGhhbWJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hhbWJ1cmdlci1tZW51LS1jbG9zZScpKSB7XHJcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2hhbWJ1cmdlci1tZW51LS1jbG9zZScpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbWVudS0tZml4ZWQnKTtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1tZW51LS1jbG9zZScpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbWVudS0tZml4ZWQnKTtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTsgLy8gaGFtYnVyZ2VyIEVORFxyXG4gICAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gbmF2SXRlbS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgbmF2SXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4geyBcclxuICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdoYW1idXJnZXItbWVudS0tY2xvc2UnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnUtLWZpeGVkJyk7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gLy8gbmF2SXRlbSBFTkRcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBoYW07XHJcblxyXG4vLyBmdW5jdGlvbiBNb2R1bGUyKGlkKSB7XHJcbi8vICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbi8vIH1cclxuIFxyXG4vLyBNb2R1bGUyLnByb3RvdHlwZS5DaGFuZ2VUZXh0MiA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAn0JAg0Y8g0LzQvtC00YPQu9GMINC90L7QvNC10YAg0LTQstCwINC4INCy0YvQstC+0LbRgyDQv9GA0LjQstC10YIg0LIg0LrQvtC90YHQvtC70LUuLi4gJztcclxuLy8gICAgIGNvbnNvbGUubG9nKCfQl9C00YDQsNCy0YHRgtCy0YPQuSwg0JzQuNGAJyk7XHJcbi8vIH07XHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kdWxlcy9oYW1idXJnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyJdLCJzb3VyY2VSb290IjoiIn0=")},function(module,exports){eval("let blur =  {\r\n    init() {\r\n        let wrapper = document.querySelector('.contact-me');\r\n        let form = document.querySelector('.contact-me__bg');\r\n        let imgWidth = document.querySelector('.speaking__bg').offsetWidth;\r\n        let posLeft = -wrapper.offsetLeft;\r\n        let posTop = -wrapper.offsetTop;\r\n        let blurCSS = form.style;\r\n        blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';\r\n        // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + (posTop+400) + 'px';\r\n        blurCSS.backgroundPosition = posLeft + 'px' + ' ' + 'bottom';\r\n        // blurCSS.backgroundPosition = (posLeft+350) + 'px' + ' ' + 'bottom';\r\n    }\r\n}\r\n\r\nmodule.exports = blur;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9ibHVyLmpzPzJjOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGJsdXIgPSAge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LW1lJyk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1tZV9fYmcnKTtcclxuICAgICAgICBsZXQgaW1nV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlYWtpbmdfX2JnJykub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgbGV0IHBvc0xlZnQgPSAtd3JhcHBlci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIGxldCBwb3NUb3AgPSAtd3JhcHBlci5vZmZzZXRUb3A7XHJcbiAgICAgICAgbGV0IGJsdXJDU1MgPSBmb3JtLnN0eWxlO1xyXG4gICAgICAgIGJsdXJDU1MuYmFja2dyb3VuZFNpemUgPSBpbWdXaWR0aCArICdweCcgKyAnICcgKyAnYXV0byc7XHJcbiAgICAgICAgLy8gYmx1ckNTUy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwb3NMZWZ0ICsgJ3B4JyArICcgJyArIChwb3NUb3ArNDAwKSArICdweCc7XHJcbiAgICAgICAgYmx1ckNTUy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwb3NMZWZ0ICsgJ3B4JyArICcgJyArICdib3R0b20nO1xyXG4gICAgICAgIC8vIGJsdXJDU1MuYmFja2dyb3VuZFBvc2l0aW9uID0gKHBvc0xlZnQrMzUwKSArICdweCcgKyAnICcgKyAnYm90dG9tJztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBibHVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHVsZXMvYmx1ci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9")}]);