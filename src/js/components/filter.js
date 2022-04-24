
searchFilter('.js-filter')
filterList('.js-filter-list', '.js-list-direction')

function searchFilter(filter) {
  let filterStage = document.querySelector(filter)
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

function filterList(filter, list) {
  let listArray = Array.from(document?.querySelectorAll('.js-list-item'))
  let filterStage = document.querySelector(filter)
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