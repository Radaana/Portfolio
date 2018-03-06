function Module2(id) {
    this.element = document.getElementById(id);
}
 
Module2.prototype.ChangeText2 = function () {
    this.element.innerHTML = 'А я модуль номер два и вывожу привет в консоли... ';
    console.log('Здравствуй, Катя');
};
module.exports = Module2;