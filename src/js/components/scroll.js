import SmoothScroll from 'smooth-scroll'

const scroll = new SmoothScroll('[data-scroll]', {  updateURL: true })
const sidebarStage = document?.querySelector('.js-sidebar-nav')
const sidebarLinks = sidebarStage?.querySelectorAll('[data-scroll]')
const titleScroll = document?.querySelectorAll('h2[id]')

const logTargetEvent = function(e) {

  let currentHash = e.detail.toggle.hash

  sidebarLinks.forEach(link => link.parentNode.classList.remove('active'))

  if(currentHash.indexOf(e.detail.anchor.id) !== -1) {
    document.querySelector(`a[href*="${currentHash}"]`).parentNode.classList.add('active')
  }

  return
}

document.addEventListener('scrollStart', logTargetEvent, false)

// window.onscroll = () => {
//   let current = "";

//   titleScroll.forEach((title) => {
//     if (scrollY >= title.offsetTop) {
//       current = title.attributes.id
//       console.log(current)
//     }
//   });

//   sidebarLinks.forEach((link) => {
//     link.parentNode.classList.remove("active");
//     if (link.href.indexOf(current) !== -1) {
//       link.parentNode.classList.add("active");
//     }
//   });
// };