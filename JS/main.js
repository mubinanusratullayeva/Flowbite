const burger = document.querySelector('.nav-burger'),
      menu = document.querySelector('.nav-menu');

      burger.addEventListener('click', () => {
        menu.classList.add('open-menu');
      })