import Request from "../classes/Request";

// Текущая сессия. Служит для отправки запросов к серверу
let currentSession = document.querySelector('#sessid')

vacanciaRequest(currentSession)
appointmentRequest(currentSession)

// Меняем содержимое вакансии при вызове модального окна с описанием
// ==================================================================
function vacanciaRequest(session) {
  const vacanciaList = document.querySelector('.js-vacancias-list')
  const vacanciaFormBody = document.getElementById('vacancia-form-body')
  const vacanciaInputName = document.getElementById('form_hidden_30')

  vacanciaList?.addEventListener('click', function(e) {

    if (e.target.closest('.js-vacancias-button')) {

      let vacanciaButton = e.target.closest('.js-vacancias-button')

      // Поменяли название вакансии в окне формы
      vacanciaInputName.value = vacanciaButton.dataset.title

      let sendRequest = new Request(
        [{name: 'ELEMENT_ID', content: vacanciaButton.dataset.id}],
        actionResponce,
        '/local/content/ajax.php',
        session.value
      ).init()

      function actionResponce(responce) {
        vacanciaFormBody.innerHTML = responce
      }
    }
  })
}

// Меняем содержимое списка доступных услуг при выборе направления
// ==================================================================
function appointmentRequest(session) {
  let buttonАppointment = document.getElementById('js-button-appointment')
  let buttonAppointmentArray = Array.from(document.querySelectorAll('.js-button-appointment'))
  let selectAppointmentDirection = document.querySelector('.js-select-appointment[data-select="direction"]')
  let optionAppointmentDirection = Array.from(selectAppointmentDirection.querySelectorAll('option'))
  let selectAppointmentService = document.querySelector('.js-select-appointment[data-select="service"]')

  // Пробежались по всем кнопкам Запись на приём и раздали им текущее значение idDirection
  buttonAppointmentArray?.forEach(button => button.dataset.idDirection = buttonАppointment?.dataset.idDirection)

  buttonAppointmentArray?.forEach(function(button) {
    // Слушаем событие клик на кнопках Запись на прём
    button.addEventListener('click', function(e) {
      // Вызываем метод формирования запроса, передаём payload
      selectAppointmentGet(this.dataset.idDirection)
    })
  })


  optionAppointmentDirection?.forEach(option => {
    if (option.dataset.id && option.dataset.id == buttonАppointment?.dataset.idDirection) {

      option.selected = true

      let sendRequest = new Request(
        [{name: 'DIRECTION', content: option.dataset.id}],
        actionResponce,
        '/local/content/services/getlist.php',
        session.value
      ).init()

      function actionResponce(responce) {
        selectAppointmentService.disabled = false
        selectAppointmentService.innerHTML = responce
      }
    }
  })

  const selectAppointmentGet = () => {
    selectAppointmentDirection?.addEventListener('change', e => {

      let optionID = e.target.options[e.target.selectedIndex].dataset.id

      if (e.target.options[e.target.selectedIndex].value !== 'Не выбрано') {
        let sendRequest = new Request(
          [{name: 'DIRECTION', content: optionID}],
          actionResponce,
          '/local/content/services/getlist.php',
          session.value
        ).init()

        function actionResponce(responce) {
          selectAppointmentService.disabled = false
          selectAppointmentService.innerHTML = responce
        }
      }
      else {
        selectAppointmentService.disabled = true
      }
    })
  }
}