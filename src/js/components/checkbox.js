export const checkboxSet = function() {

  let filterStage = document.querySelector('.js-sidebar-filter')
  let checkboxGroup = document.querySelectorAll('.js-checkbox')
  let filterReset = document.querySelector('.js-reset-filter')

  checkboxGroup.forEach(checkbox => {
    if (checkbox.checked) {
      checkbox.closest('.label').classList.add('active')
    }
  })

  filterStage.addEventListener('click', function(event) {
    if (event.target.closest('.label')) {
      event.target.closest('.label').classList.toggle('active')
      console.log(event.target.closest('.label'))
    }
  })

  filterReset.addEventListener('click', function(event) {
    event.preventDefault()
    checkboxGroup.forEach(checkbox => {
      if (!checkbox.value === 'Все направления') {
        checkbox.checked === false
      }
    })
  })
}