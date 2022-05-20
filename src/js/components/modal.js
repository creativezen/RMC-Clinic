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
// ==================================================================
const currentSession = document.querySelector('#sessid')

// Меняем содержимое вакансии при вызове модального окна с описанием
// ==================================================================
const vacanciaList = document.querySelector('.js-vacancias-list')
const vacanciaFormBody = document.getElementById('vacancia-form-body')
const vacanciaInputName = document.getElementById('form_hidden_30')

// vacanciaList?.addEventListener('click', function(e) {

//   if (e.target.closest('.js-vacancias-button')) {

//     let vacanciaButton = e.target.closest('.js-vacancias-button')
//     let session = currentSession.value
//     let DATA = new FormData()

//     DATA.append('ELEMENT_ID', vacanciaButton.dataset.id);
//     DATA.append('sessid', session);

//     // Поменяли название вакансии в окне формы
//     vacanciaInputName.value = vacanciaButton.dataset.title

//     // Создали запрос
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function() {
//       // Если отработает запрос, посмотрим на ответ
//       if (xhr.readyState === 4) {
//         console.log(xhr.response)
//         console.log(DATA)

//         vacanciaFormBody.innerHTML = xhr.response
//       }
//     }

//     // Постучались
//     xhr.open('POST', '/local/content/ajax.php', true)

//     // Прописали заголовок (хз. нужно ли...)
//     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

//     // Отправили наш пакет
//     xhr.send(DATA)
//   }
// })

let buttonАppointment = document.getElementById('js-button-appointment')
let buttonAppointmentArray = Array.from(document.querySelectorAll('.js-button-appointment'))
let selectAppointmentDirection = document.querySelector('.js-select-appointment[data-select="direction"]')
let optionAppointmentDirection = Array.from(selectAppointmentDirection.querySelectorAll('option'))
let selectAppointmentService = document.querySelector('.js-select-appointment[data-select="service"]')

buttonAppointmentArray.forEach(button => button.dataset.idDirection = buttonАppointment?.dataset.idDirection)

buttonAppointmentArray.forEach(function(button) {
  button.addEventListener('click', function(e) {
    selectAppointmentGet(this.dataset.idDirection)
  })
})

optionAppointmentDirection.forEach(option => {

  if (option.dataset.id == buttonАppointment?.dataset.idDirection) {

    option.selected = true

    let DATA = new FormData()

    DATA.append('DIRECTION', option.dataset.id)
    DATA.append('sessid', currentSession.value);

    // Создали запрос
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
      // Если отработает запрос, посмотрим на ответ
      if (xhr.readyState === 4) {
        console.log(xhr.response)
        selectAppointmentService.disabled = false
        selectAppointmentService.innerHTML = xhr.response
      }
    }

    // Постучались
    xhr.open('POST', '/local/content/services/getlist.php', true)

    // Прописали заголовок (хз. нужно ли...)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

    // Отправили наш пакет
    xhr.send(DATA)
  }
})

const selectAppointmentGet = () => {

  selectAppointmentDirection.addEventListener('change', e => {

    let optionID = e.target.options[e.target.selectedIndex].dataset.id
    let session = currentSession.value
    let DATA = new FormData()

    DATA.append('DIRECTION', optionID)
    DATA.append('sessid', session);

    // Создали запрос
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
      // Если отработает запрос, посмотрим на ответ
      if (xhr.readyState === 4) {
        console.log(xhr.response)
        selectAppointmentService.disabled = false
        selectAppointmentService.innerHTML = xhr.response
      }
    }

    // Постучались
    xhr.open('POST', '/local/content/services/getlist.php', true)

    // Прописали заголовок (хз. нужно ли...)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

    // Отправили наш пакет
    xhr.send(DATA)
  })
}
