(function(){
    let auth = document.getElementById('auth');
    // let close = document.getElementByClassName('hamburger-menu--close');
    let flipper = document.getElementsByClassName('flipper')[0];
    let toMain = document.getElementById('to-main');
  
    auth.addEventListener('click', e => {
      e.preventDefault();
      // console.log('test');
      flipper.classList.add('flipper--flip');
      auth.classList.add('visually-hidden');
    }); // auth END
  
    toMain.addEventListener('click', e => {
      e.preventDefault();
      // console.log('test');
      flipper.classList.remove('flipper--flip');
      auth.classList.remove('visually-hidden');
      console.log('Кнопка на главную');
  
    }); // auth END
  })(); // end