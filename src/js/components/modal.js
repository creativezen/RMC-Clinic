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
const vacanciaTitle = document.querySelector('.js-form-vacancia .form__legend')

vacanciaList?.addEventListener('click', function(e) {

  if (e.target.closest('.js-vacancias-button')) {

    let vacanciaButton = e.target.closest('.js-vacancias-button')

    // Поменяли название вакансии в окне формы
    vacanciaTitle.textContent = vacanciaButton.dataset.title

    // Формируем пакет данных
    let DATA = {
      ELEMENT_ID: vacanciaButton.dataset.id,
      NAME: '#sessid'
    }

    // Создали запрос
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {
      // Если отработает запрос, посмотрим на ответ
      if (xhr.readyState === 4) {
        console.log(xhr.response)
      }
    }

    // Постучались
    xhr.open('GET', '/local/content/ajax.php', true)

    // Прописали заголовок (хз. нужно ли...)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

    // Отправили наш пакет
    xhr.send(DATA)
  }
})