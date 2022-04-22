
searchFilter('.js-filter')

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