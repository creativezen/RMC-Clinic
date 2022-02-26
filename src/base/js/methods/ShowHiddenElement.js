import { AnimationHeight } from '../classes/classAnimationHeight'

export const ShowHiddenElement = function(classContainer) {
  let mainStage = document.querySelectorAll(`.${classContainer}`)
  initShowHidden(mainStage)
}

function initShowHidden(mainStage) {
  mainStage.forEach(stage => {
    stage.addEventListener('click', function(event) {
      if (event.target.closest('.js-button-element-show')) {

        this.classList.toggle('active')
        let currentStage = this
        let thisState = currentStage.dataset.state = this.classList.contains('active') ? 'open' : 'close'
        let element = stage.querySelector('.js-element-target')
        let closeButton = stage.querySelector('.js-button-element-hide')
        let openButton = stage.querySelector('.js-button-element-show')
        let openButtonType = openButton.dataset.type
        let textButton = openButton.querySelector('.js-button-text')

        openButtonType !== 'block'
          ? openButton.classList.toggle('button--close')
          : openButton.classList.toggle('visible')


        if (textButton) {
          textButton.textContent = thisState === 'open'
          ? `Скрыть ${textButton.dataset.text}`
          : `Показать ${textButton.dataset.text}`
        }

        const animateHeight = new AnimationHeight(element)

        closeButton?.addEventListener('click', function(event) {
          animateHeight.close()
          openButton.classList.remove('button--close')
          stage.classList.remove('active')
          currentStage.dataset.state = 'close'

          if (textButton) {
            textButton.textContent = `Показать ${textButton.dataset.text}`
          }
        })
      }
    })
  })
}