import $ from 'jquery';

export default class Navigation {
  constructor() {
    this.navOpen();
    this.navScroll();
    this.navPosition();
  }

  navOpen() {
    const $menu = document.querySelector('.js-menu');
    const $menuBtn = document.querySelector('.js-menu-btn');
    const $menuLink = document.querySelectorAll('.js-header-link');
    const $menuContainer = document.querySelector('.js-header-container');
    const $body = document.querySelector('body');

    const scrollPrevent = () => {
      if (window.matchMedia( "(max-width: 768px)" ).matches) {
        if($menu.classList.contains('is-on')) {
          $body.style.overflow = 'hidden';
        } else {
          $body.style.overflow = 'auto';
        }
      }
    }
    $menuBtn.addEventListener('click', () => {
      $menu.classList.toggle('is-on');
      $menuBtn.classList.toggle('is-on');
      $menuContainer.classList.toggle('is-on');
      scrollPrevent();
    })

  }

  navScroll() {
    const $header = document.querySelector('.header');
    const $nav = document.querySelector('.header-container');
    const $footer = document.querySelector('.footer');
    const array = ['scroll', 'load'];

    array.forEach((item, i) => {
      window.addEventListener(item, function() {
        const windowHeight = window.innerHeight;
        const targetHeader = $header.getBoundingClientRect().top;
        const targetFooter = $footer.getBoundingClientRect().top - windowHeight;
        const offsetTop = window.pageYOffset;

        if(targetHeader < 0) {
          $nav.classList.add('is-scroll');
        } else {
          $nav.classList.remove('is-scroll');
        }

        if (window.matchMedia( "(min-width: 769px)" ).matches) {
          if (targetFooter < 0) {
            $nav.classList.add('is-scroll-out');
          } else {
            $nav.classList.remove('is-scroll-out');
          }
        } else {
          $nav.classList.remove('is-scroll-out');
        }


      })

      // if (url === '/') {
      //
      //   // const targetTop = topics.getBoundingClientRect().top  - windowHeight + onlineBtn.offsetHeight;
      //   const targetBottom = $footer.getBoundingClientRect().top - windowHeight;
      //   const offsetTop = window.pageYOffset;
      //
      //   if(targetTop < 0 && targetBottom > 0) {
      //     onlineBtn.classList.add('is-in');
      //   }else {
      //     onlineBtn.classList.remove('is-in');
      //   }
      //
      // }



    });


  }

  navPosition() {
    const $pageContainer = document.querySelector('.page-container');
    const url = location.pathname;

    console.log(url);
    if (url === '/') {
      $pageContainer.style.display = 'flex';
      $pageContainer.style.flexDirection = 'column';

    } else {
      $pageContainer.style.display = 'block';
      $pageContainer.style.flexDirection = 'auto';
    }
  }
}
