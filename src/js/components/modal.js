import GraphModal from 'graph-modal';

export const modal = new GraphModal();

document.querySelectorAll('.graph-modal__container').forEach(item => {
  item.addEventListener('click', function(e) {
    if (e.target.closest('.js-close')) {
      modal.close()
    }
  })
})