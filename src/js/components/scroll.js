import SmoothScroll from 'smooth-scroll'
const scroll = new SmoothScroll('[data-scroll]', {
  updateURL: true
})

const logTargetEvent = function(e) {
  console.log('toggle:', e.detail.toggle.href)
  console.log('anchor:', e.detail.anchor.id);
}

// document.addEventListener('scrollStart', logTargetEvent, false)