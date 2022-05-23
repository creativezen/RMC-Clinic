import Swiper, { Pagination, Navigation, Autoplay, Thumbs, EffectFade, FreeMode } from 'swiper'

Swiper.use([ Pagination, Navigation, Autoplay, Thumbs, EffectFade, FreeMode ])

const swiperThumbs = new Swiper('.js-swiper-thumbs', {
  autoHeight: true,
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

const sliders = [
  {name: 'specialist'},
  {name: 'service'},
  {name: 'feedback'},
  {name: 'news'},
  {name: 'partner'},
  {name: 'sales'}
]

while (sliders.length) {

  let sliderItem = sliders.shift()
  let sliderSelector = `.js-swiper-${sliderItem.name}`

  new Swiper(sliderSelector, {
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
          nextEl: `.swiper-button-next.next-${sliderItem.name}`,
          prevEl: `.swiper-button-prev.prev-${sliderItem.name}`,
        },
      },
    }
  })
  continue
}