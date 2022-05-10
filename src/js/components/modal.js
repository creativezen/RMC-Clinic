import GraphModal from "../classes/Modal";

export const modal = new GraphModal();

document.querySelectorAll('.graph-modal__container').forEach(item => {
  item.addEventListener('click', function(e) {
    if (e.target.closest('.js-close')) {
      modal.close()
    }
  })
})

const vacanciaList = document.querySelector('.js-vacancias-list')
const vacanciaFormBody = document.getElementById('vacancia-form-body')
const vacanciaInputName = document.getElementById('form_hidden_30')
const vacanciaSession = document.querySelector('#sessid')

vacanciaList?.addEventListener('click', function(e) {

  if (e.target.closest('.js-vacancias-button')) {

    let vacanciaButton = e.target.closest('.js-vacancias-button')
    let session = vacanciaSession.value
    let DATA = new FormData()

    DATA.append('ELEMENT_ID', vacanciaButton.dataset.id);
    DATA.append('sessid', session);

    // Поменяли название вакансии в окне формы
    vacanciaInputName.value = vacanciaButton.dataset.title

    // Создали запрос
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {
      // Если отработает запрос, посмотрим на ответ
      if (xhr.readyState === 4) {
        console.log(xhr.response)
        console.log(DATA)

        vacanciaFormBody.innerHTML = xhr.response
      }
    }

    // Постучались
    xhr.open('POST', '/local/content/ajax.php', true)

    // Прописали заголовок (хз. нужно ли...)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

    // Отправили наш пакет
    xhr.send(DATA)
  }
})