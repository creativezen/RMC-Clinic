import Swiper, { Pagination, Navigation, Autoplay, Thumbs, EffectFade, FreeMode } from 'swiper'

Swiper.use([ Pagination, Navigation, Autoplay, Thumbs, EffectFade, FreeMode ])

const swiperThumbs = new Swiper('.js-swiper-thumbs', {
  spaceBetween: 0,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 5000,
  },
})

const swiperHero = new Swiper('.js-swiper-hero', {
  speed: 800,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  thumbs: {
    swiper: swiperThumbs,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  }
});

callSwiperSpecialist(document.querySelector('.js-swiper-specialist'))
callSwiperServices(document.querySelector('.js-swiper-service'))
callSwiperFeedbacks(document.querySelector('.js-swiper-feedback'))
callSwiperNews(document.querySelector('.js-swiper-news'))
callSwiperPartners(document.querySelector('.js-swiper-partner'))
callSwiperSales(document.querySelector('.js-swiper-sales'))


function callSwiperSpecialist(selector) {
  if (selector) {
    const sliderSpecialist = new Swiper(selector, {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
          navigation: {
            nextEl: ".swiper-button-next.next-specialist",
            prevEl: ".swiper-button-prev.prev-specialist",
          },
        },
      }
    })
  }
}

function callSwiperServices(selector) {
  if (selector) {
    const sliderServices = new Swiper(selector, {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
          navigation: {
            nextEl: ".swiper-button-next.next-service",
            prevEl: ".swiper-button-prev.prev-service",
          },
        },
      }
    })
  }
}

function callSwiperFeedbacks(selector) {
  if (selector) {
    const sliderFeedbacks = new Swiper(selector, {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
          navigation: {
            nextEl: ".swiper-button-next.next-feedback",
            prevEl: ".swiper-button-prev.prev-feedback",
          },
        },
      }
    })
  }
}

function callSwiperNews(selector) {
  if (selector) {
    const sliderFeedbacks = new Swiper(selector, {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
          navigation: {
            nextEl: ".swiper-button-next.next-news",
            prevEl: ".swiper-button-prev.prev-news",
          },
        },
      }
    })
  }
}

function callSwiperPartners(selector) {
  if (selector) {
    const sliderFeedbacks = new Swiper(selector, {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
          navigation: {
            nextEl: ".swiper-button-next.next-partner",
            prevEl: ".swiper-button-prev.prev-partner",
          },
        },
      }
    })
  }
}

function callSwiperSales(selector) {
  if (selector) {
    const sliderFeedbacks = new Swiper(selector, {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        780: {
          slidesPerView: 2,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
          navigation: {
            nextEl: ".swiper-button-next.next-sales",
            prevEl: ".swiper-button-prev.prev-sales",
          },
        },
      }
    })
  }
}