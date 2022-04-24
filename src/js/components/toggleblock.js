import { AnimationHeight } from '../functions/AnimationHeight'

const stage = document.querySelectorAll('.js-animation-height')
const stageChild = document.querySelectorAll('.js-animation-child')

if (stage) initShowHidden(stage)
if (stageChild) initShowHiddenChild(stageChild)

function initShowHidden(mainStage) {

  mainStage.forEach(stage => {

    stage.addEventListener('click', function(event) {
      if (event.target.closest('.js-button-show')) {
        this.classList.toggle('active')
        let currentStage = this
        let thisState = currentStage.dataset.state = this.classList.contains('active') ? 'open' : 'close'
        let element = stage.querySelector('.js-animation-target')
        let closeButton = stage.querySelector('.js-button-hide')
        let openButton = stage.querySelector('.js-button-show')
        let openButtonType = openButton.dataset.type
        let textButton = openButton

        openButtonType !== 'block'
          ? openButton.classList.toggle('button--close')
          : openButton.classList.toggle('visible')

        if (textButton && !openButtonType) {
          textButton.textContent = thisState === 'open'
          ? `Скрыть ${textButton.dataset.text}`
          : `Читать ${textButton.dataset.text}`
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

function initShowHiddenChild(mainStage) {

  mainStage.forEach(stage => {

    stage.addEventListener('click', function(event) {
      if (event.target.closest('.js-button-child-show')) {
        this.classList.toggle('active')
        let currentStage = this
        let thisState = currentStage.dataset.state = this.classList.contains('active') ? 'open' : 'close'
        let element = stage.querySelector('.js-animation-child-target')
        let closeButton = stage.querySelector('.js-button-hide')
        let openButton = stage.querySelector('.js-button-child-show')
        let openButtonType = openButton.dataset.type
        let textButton = openButton

        const animateHeight = new AnimationHeight(element)

        openButtonType !== 'block'
          ? openButton.classList.toggle('button--close')
          : openButton.classList.toggle('visible')


        if (textButton && !openButtonType) {
          textButton.textContent = thisState === 'open'
          ? `Скрыть ${textButton.dataset.text}`
          : `Читать ${textButton.dataset.text}`
        }

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

function buttonCloseChange(buttonClose) {
  buttonClose.addEventListener('click', function(event) {
    animateHeight.close()
    openButton.classList.remove('button--close')
    stage.classList.remove('active')
    currentStage.dataset.state = 'close'

    if (textButton) {
      textButton.textContent = `Показать ${textButton.dataset.text}`
    }
  })
}