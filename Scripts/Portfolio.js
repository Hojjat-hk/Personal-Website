// [+] Variables
let portfolioSectionButtons = $.querySelectorAll(".portfolio-list__item");
// [+] Swiper Config
const swiperConfig = {
    spaceBetween: 28,
    slidesPerView:1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay : {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768 : {
            slidesPerView : 2,
        },
        1200 : {
            slidesPerView : 3,
        }
    }
}

// [+] Swiper Variables Defining
const swiper1 = new Swiper('.swiper1', swiperConfig);
const swiper2 = new Swiper('.swiper2', swiperConfig);
const swiper3 = new Swiper('.swiper3', swiperConfig);
const swiper4 = new Swiper('.swiper4', swiperConfig);
const swiper5 = new Swiper('.swiper5', swiperConfig);
const swiper6 = new Swiper('.swiper6', swiperConfig);

// [+] Send Data To Function
navigationTapsInit(portfolioSectionButtons, "click", "portfolio-list__item--active", "portfolio-content--show");
