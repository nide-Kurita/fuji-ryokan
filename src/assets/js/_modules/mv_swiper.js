import $ from 'jquery';
import Swiper from 'swiper';

export default class MvSwiper {
  constructor() {
    const mvSwiper = ()=> {
      new Swiper('.mv-swiper .swiper-container', {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
        speed: 2000,
        effect: "fade",
        slidesPerView: 1,
      });
    }

    mvSwiper();





  }
}
