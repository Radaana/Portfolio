let ham = require ('./modules/hamburger');
let blur = require ('./modules/blur');


ham.init();
blur.init();

window.onresize = function () {
    blur.init();
}