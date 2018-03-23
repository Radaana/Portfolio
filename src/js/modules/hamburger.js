var ham = {
    init() {
        let hamburger = document.getElementById('hamburger-menu');
        // let close = document.getElementByClassName('hamburger-menu--close');
        let nav = document.getElementsByClassName('fullscreen')[0];
        let navItem = nav.getElementsByClassName('nav__link');
        let wrapper = document.getElementsByClassName('header__menu')[0];
      
        hamburger.addEventListener('click', e => {
          e.preventDefault();
          // console.log('test');
          if (hamburger.classList.contains('hamburger-menu--close')) {
            nav.classList.add('visually-hidden');
            hamburger.classList.remove('hamburger-menu--close');
            wrapper.classList.remove('header__menu--fixed');
          } else {
            nav.classList.remove('visually-hidden');
            hamburger.classList.add('hamburger-menu--close');
            wrapper.classList.add('header__menu--fixed');
          }
        }); // hamburger END
      
        for (var i = navItem.length - 1; i >= 0; i--) {
          navItem[i].addEventListener('click', e => { 
            // e.preventDefault();
            nav.classList.add('visually-hidden');
            hamburger.classList.remove('hamburger-menu--close');
            wrapper.classList.remove('header__menu--fixed');
          })
        } // navItem END
    }
}

module.exports = ham;

// function Module2(id) {
//     this.element = document.getElementById(id);
// }
 
// Module2.prototype.ChangeText2 = function () {
//     this.element.innerHTML = 'А я модуль номер два и вывожу привет в консоле... ';
//     console.log('Здравствуй, Мир');
// };

// module.exports = Module2;