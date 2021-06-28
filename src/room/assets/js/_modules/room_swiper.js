import $ from 'jquery';
import Swiper from 'swiper';

export default class RoomSwiper {
  constructor() {
    const array = ['01', '02', '03'];

    array.forEach((num) => {

      const roomSwiper = new Swiper(`.room-swiper--${num} .swiper-container`, {
        loop: true,
        // effect: "fade",
        slidesPerView: 1,
        navigation: {
          nextEl: `.room-swiper--${num} .arrow--right`,
          prevEl: `.room-swiper--${num} .arrow--left`,
        },
        pagination: {
          el: `.room-swiper--${num} .room-pagination-num`,
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return '<span class="num-current">' + current.toString().padStart(2, '0') + '</span>' + '<span class="num-slash">/</span>' + '<span class="num-total">' + total.toString().padStart(2, '0') + '</span>';
          },
        },

      });

    });

  }
}
