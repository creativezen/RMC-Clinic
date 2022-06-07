import './_vendor';
import './_components';
import './services/requests'

document.addEventListener('DOMContentLoaded', function () {

  // Блокируем функцию зумирование в браузере
  var keyCodes = [61, 107, 173, 109, 187, 189];

  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey == true && (keyCodes.indexOf(event.which) != -1)) {
      console.log('Масштабирование окна отключено');
      event.preventDefault();
    }
    if (event.metaKey == true && (keyCodes.indexOf(event.which) != -1)) {
      console.log('Масштабирование окна отключено');
      event.preventDefault();
    }
  })

  window.addEventListener('mousewheel', function (event) {
    if (event.ctrlKey == true || event.metaKey == true) {
      console.log('Масштабирование окна отключено');
      event.preventDefault();
    }
  }, { passive: false });
})