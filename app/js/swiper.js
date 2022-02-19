// core version + navigation, pagination modules:
import Swiper, {
  Navigation,
  Pagination,
} from "../../node_modules/swiper/swiper-bundle";

// init Swiper:
const swiper = new Swiper(".main__banner-swiper", {
  // Optional parameters
  wrapperClass: "main__banner-wrapper",
  slideClass: "main__banner-slide",
	slidesPerView: 1,
	centeredSlides: true,

// If we need pagination
 pagination: {
	el: ".main__banner-pagination",
	clickable: true,
},

thumbs: {
	swiper: {
		el: ".swiper__preview",
		slidesPerView: 3,
		direction: "vertical",
		//loop: true,
	},
},

    //Управление слайдера с помощью клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

// init Swiper:
const custom_swiper = new Swiper(".customer-swiper", {
  // Optional parameters
  wrapperClass: "customer-wrapper",
  slideClass: "customer-slide",
	slidesPerView: 1,
	centeredSlides: true,
  loop: true,
  // autoplay: true,
  // speed: 400,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    //Управление слайдера с помощью клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});