var Module1 = require("./modules/module1"),
    Module2 = require("./modules/module2"),
 
    m1 = new Module1("text"),
    m2 = new Module2("text");
 
document.getElementById('btn-module-1').onclick = function () {
    m1.ChangeText();
};
 
document.getElementById('btn-module-2').onclick = function () {
    m2.ChangeText2();
};

console.log('Hi');