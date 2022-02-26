import { AnimationHeight } from '../../base/js/classes/classAnimationHeight'

export const Menu = function(menuClass) {
  /** Получаем блок меню */
  const menuContainer = document.querySelector(`.${menuClass}`)

  /** Если блок меню присутствует на странице */
  menuContainer?.addEventListener('click', function(event) {

    /** Если событие клик произошло не на подменю, и если блок меню не в состоянии close */
    if (!event.target.closest('.js-submenu') && !menuContainer.classList.contains('close')) {

      /** Прячем/Показываем подменю */
      event.target.closest('.js-menu-item')?.classList.toggle('menu__item--active')

      /** Забираем из элемента меню сабменю */
      let submenu = event.target.closest('.js-menu-item')?.querySelector('.js-submenu')
      createAnimate(submenu)
    }
  })
}

 /** Если сабменю присутствует, создаём экземпляр AnimationHeight и на вход передаём
 * блок сабменю */
function createAnimate(element) {
  if (element) {
    const animateHeight = new AnimationHeight(element)
  }
  else {
    return false
  }
}