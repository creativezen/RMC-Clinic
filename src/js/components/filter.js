

// Фильтрация в списке чекбоксов через поле поиска
searchFilter()

// Фильтрация в разделе Направления
filterDirectoin()

// Фильтрация в разделе Цены
filterPrices()

function searchFilter() {
  let filterStage = document.querySelector('.js-filter')
  let seachInFilter = filterStage?.querySelector('.js-search-in-filter')

  seachInFilter?.addEventListener('input', function() {
    let filterValue = seachInFilter.value.toUpperCase()
    let filtersArray = filterStage.querySelectorAll('.js-sidebar-filter > li')

    filtersArray.forEach(item => {
      let currentLabel = item.querySelector('label')
      let labelValue = currentLabel.getAttribute('fast-search-value').toUpperCase()
      labelValue.toUpperCase().indexOf(filterValue) !== -1
        ? item.style.display = 'flex'
        : item.style.display = 'none'
    })
  })
}

function filterDirectoin() {
  let listArray = Array.from(document?.querySelectorAll('.js-list-item'))
  let filterStage = document.querySelector('.js-filter-list')
  let filtersArray = Array.from(document?.querySelectorAll('.js-filter-list-item'))
  let filterReset = document.querySelector('.js-filter-list-reset')

  filterStage?.addEventListener('click', function(e) {
    if (e.target.closest('.js-filter-list-item')) {
      filtersArray.forEach(item => {
        let currentFilter = e.target.closest('.js-filter-list-item').dataset.filter
        if (item.classList.contains('.active')) {
          return
        }
        item.classList.remove('active')
        e.target.closest('.js-filter-list-item').classList.add('active')

        listArray.forEach(item => {
          item.classList.remove('visually-hidden')
          if (item.dataset.item !== currentFilter) {
            item.classList.add('visually-hidden')
          }
        })
        filterReset.classList.remove('visually-hidden')
      })
    }
    filterReset?.addEventListener('click', onReset())
  })

  const onReset = () => {
    filterReset?.addEventListener('click', function() {
      filtersArray.forEach(item => {
        item.classList.remove('active')
        filterStage.dataset.state = 'disabled'
        filterReset.classList.add('visually-hidden')
      })
      listArray.forEach(item => {
        item.classList.remove('visually-hidden')
      })
    })
  }
}

function filterPrices() {
  let priceStage = Array.from(document.querySelectorAll('.js-prices > li'))
  let filterStage = Array.from(document.querySelectorAll('input[type="checkbox"]:not(.input-agree)'))
  let filterReset = document.querySelector('.js-filter-reset')

  let checkedCheckboxArray

  filterStage?.forEach(filter => {

    filter.addEventListener('change', (e) => {
      let targetCheckbox = e.target.closest('input[type="checkbox"]')

      checkedCheckboxArray = []

      if (targetCheckbox.id == 'Все направления') {
        filterStage.filter(filter => {
          if (!filter.dataset.value) {
            filter.checked = false
          }
        })
        resetArray()
        updatePrice(targetCheckbox.id)
      }

      if (targetCheckbox.id !== 'Все направления') {
        filterStage.find(checkbox => checkbox.id == 'Все направления').checked = false
        filterStage.forEach(checkbox => {
          if (checkbox.checked) {
            updateArray(checkbox.id)
          }
        })
        updatePrice(targetCheckbox.id)
      }
      if (!checkedCheckboxArray.length) {
        filterStage.find(checkbox => checkbox.id == 'Все направления').checked = true
      }

    })
  })

  filterReset?.addEventListener('click', () => {
    filterStage.filter(checkbox => {
      checkbox.id == 'Все направления' ? checkbox.checked = true : checkbox.checked = false
    })
    resetArray()
    updatePrice('Все направления')
  })

  function resetArray() {
    checkedCheckboxArray = []
    resetPrice()
  }

  function updateArray(element) {
    checkedCheckboxArray.unshift(element)
  }

  function updatePrice(checkbox) {
    if (checkedCheckboxArray.length === 0) {
      resetPrice()
    }
    if (checkbox !== 'Все направления' && checkedCheckboxArray.length !== 0) {
      priceStage.forEach(item => {
        let goal = checkedCheckboxArray.some(element => element == item.dataset.name)
        goal ? item.classList.remove('hide') : item.classList.add('hide')
      })
    }
  }

  function resetPrice() {
    priceStage.forEach(item => item.classList.remove('hide'))
  }
}

