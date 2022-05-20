import GraphModal from "../classes/Modal";

export const modal = new GraphModal();

document.querySelectorAll('.graph-modal__container').forEach(item => {
  item.addEventListener('click', function(e) {
    if (e.target.closest('.js-close')) {
      modal.close()
    }
  })
})

// Текущая сессия. Служит для отправки запросов к серверу
let currentSession = document.querySelector('#sessid')

// Создали запрос
let xhr = new XMLHttpRequest()

// Создали структуру запроса
// ==================================================================
function appointmentRequest(appendData, callback, url) {

  // Создали объект типа FormData для пакета данных
  let DATA = new FormData()

  // Добавили в пакет данные
  appendData.forEach(item => DATA.append(item.name, item.content))

  // Добавили в пакет данные сессии
  DATA.append('sessid', currentSession.value)

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      callback(xhr.response)
    }
  }

  // Постучались
  xhr.open('POST', url, true)
  // Прописали заголовок (хз. нужно ли...)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  // Отправили наш пакет
  xhr.send(DATA)
}

// class Request {
//   appendData
//   callback
//   url
//   session
//   xhr

//   constructor(appendData, callback, url, sessid, xhr) {
//     this.DATA = new FormData()
//     this.package = appendData
//     this.callback = callback
//     this.url = url
//     this.session = sessid
//     this.xhr = xhr
//   }

//   init() {
//     this.append()
//     this.onready()
//     this.send()
//   }

//   append() {
//     // Добавили в пакет данные
//     this.appendData.forEach(item => this.DATA.append(item.name, item.content))
//     // Добавили в пакет данные сессии
//     this.DATA.append('sessid', this.session)
//   }

//   onready() {
//     this.xhr.onreadystatechange = () => {
//       if (this.xhr.readyState === 4) {
//         this.callback(this.xhr.response)
//       }
//     }
//   }

//   send() {
//     // Постучались
//     this.xhr.open('POST', url, true)
//     // Прописали заголовок (хз. нужно ли...)
//     this.xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
//     // Отправили наш пакет
//     this.xhr.send(DATA)
//   }
// }

const vacanciaModal = () => {
  // Меняем содержимое вакансии при вызове модального окна с описанием
  // ==================================================================
  const vacanciaList = document.querySelector('.js-vacancias-list')
  const vacanciaFormBody = document.getElementById('vacancia-form-body')
  const vacanciaInputName = document.getElementById('form_hidden_30')

  vacanciaList?.addEventListener('click', function(e) {

    if (e.target.closest('.js-vacancias-button')) {

      let vacanciaButton = e.target.closest('.js-vacancias-button')
      let session = currentSession.value

      // Поменяли название вакансии в окне формы
      vacanciaInputName.value = vacanciaButton.dataset.title

      // let sendRequest = new Request(
      //   [{name: 'ELEMENT_ID', content: vacanciaButton.dataset.id}],
      //   actionResponce,
      //   '/local/content/ajax.php',
      //   currentSession.value,
      //   xhr
      // )

      // sendRequest.init()

      appointmentRequest([{name: 'ELEMENT_ID', content: vacanciaButton.dataset.id}], actionResponce, '/local/content/ajax.php')

      function actionResponce(responce) {
        vacanciaFormBody.innerHTML = responce
      }
    }

  })
}

vacanciaModal()

const appointmentModal = () => {
  let buttonАppointment = document.getElementById('js-button-appointment')
  let buttonAppointmentArray = Array.from(document.querySelectorAll('.js-button-appointment'))
  let selectAppointmentDirection = document.querySelector('.js-select-appointment[data-select="direction"]')
  let optionAppointmentDirection = Array.from(selectAppointmentDirection.querySelectorAll('option'))
  let selectAppointmentService = document.querySelector('.js-select-appointment[data-select="service"]')

  buttonAppointmentArray?.forEach(button => button.dataset.idDirection = buttonАppointment?.dataset.idDirection)

  buttonAppointmentArray?.forEach(function(button) {
    button.addEventListener('click', function(e) {
      selectAppointmentGet(this.dataset.idDirection)
    })
  })

  optionAppointmentDirection?.forEach(option => {

    if (option.dataset.id == buttonАppointment?.dataset.idDirection) {

      option.selected = true

      // let sendRequest = new Request(
      //   [{name: 'DIRECTION', content: option.dataset.id}],
      //   actionResponce,
      //   '/local/content/services/getlist.php',
      //   currentSession.value,
      //   xhr
      // )

      // sendRequest.init()

      appointmentRequest([{name: 'DIRECTION', content: option.dataset.id}], actionResponce, '/local/content/services/getlist.php')

      function actionResponce(responce) {
        selectAppointmentService.disabled = false
        selectAppointmentService.innerHTML = responce
      }

    }
  })

  const selectAppointmentGet = () => {

    selectAppointmentDirection?.addEventListener('change', e => {

      let optionID = e.target.options[e.target.selectedIndex].dataset.id

      // let sendRequest = new Request(
      //   [{name: 'DIRECTION', content: optionID}],
      //   actionResponce,
      //   '/local/content/services/getlist.php',
      //   currentSession.value,
      //   xhr
      // )

      // sendRequest.init()

      appointmentRequest([{name: 'DIRECTION', content: optionID}], actionResponce, '/local/content/services/getlist.php')

      function actionResponce(responce) {
        selectAppointmentService.disabled = false
        selectAppointmentService.innerHTML = responce
      }
    })
  }
}

appointmentModal()