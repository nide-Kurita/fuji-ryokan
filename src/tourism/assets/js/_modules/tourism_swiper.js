import $ from 'jquery';
import Swiper from 'swiper';

export default class TourismSwiper {
  constructor() {
    const array = ['01', '02', '03'];

    array.forEach((num) => {

      const roomSwiper = new Swiper(`.tourism-swiper--${num} .swiper-container`, {
        loop: true,
        // effect: "fade",
        slidesPerView: 1,
        navigation: {
          nextEl: `.tourism-swiper--${num} .arrow--right`,
          prevEl: `.tourism-swiper--${num} .arrow--left`,
        },
      });
    });

  }
}
