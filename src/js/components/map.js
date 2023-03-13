if (document.querySelector('#map-rmc')) {
	ymaps.ready(init)

	function init() {
		let map = new ymaps.Map('map-rmc', {
			center: [56.78334080170144, 60.545243873506465],
			zoom: 16.5,
		})

		let pin = new ymaps.Placemark(
			[56.78334080170144, 60.545243873506465],
			{},
			{
				iconLayout: 'default#image',
				iconImageHref: '/local/templates/clinic/img/map-pin.svg',
				iconImageSize: [84, 98],
				iconOffset: [-35, -55],
			}
		)

		// map.controls.remove('geolocationControl'); // удаляем геолокацию
		// map.controls.remove('searchControl'); // удаляем поиск
		// map.controls.remove('trafficControl'); // удаляем контроль трафика
		// map.controls.remove('typeSelector'); // удаляем тип
		// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
		// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
		// map.controls.remove('rulerControl'); // удаляем контрол правил
		// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

		map.geoObjects.add(pin)
	}
}
