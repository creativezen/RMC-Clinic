export default class Request {
  appendData
  callback
  url
  session

  constructor(appendData, callback, url, sessid) {
    this.XHR = new XMLHttpRequest()
    this.DATA = new FormData()

    this.appendData = appendData
    this.callback = callback
    this.url = url
    this.session = sessid
  }

  init() {
    this.append()
    this.onready()
    this.send()
  }

  append() {
    this.appendData.forEach(item => this.DATA.append(item.name, item.content))
    this.DATA.append('sessid', this.session)
  }

  onready() {
    this.XHR.onreadystatechange = () => {
      if (this.XHR.readyState === 4) {
        this.callback(this.XHR.response)
        // Для отладки кода
        // this.callback('<option value="default">Не выбрано</option>'+
        // '<option data-id="89" value="Первичный прием гинеколога">Первичный прием гинеколога</option>'+
        // '<option data-id="95" value="Первичный прием гинеколога эндокринолога">Первичный прием гинеколога эндокринолога</option>'+
        // '<option data-id="90" value="Повторный приём гинеколога">Повторный приём гинеколога</option>'+
        // '<option data-id="96" value="Повторный прием гинеколога эндокринолога">Повторный прием гинеколога эндокринолога</option>'+
        // '<option data-id="2248" value="Прием по результатам анализов">Прием по результатам анализов</option>'+
        // '<option data-id="97" value="УЗИ органов малого таза">УЗИ органов малого таза</option>'+
        // '<option data-id="2080" value="УЗИ органов малого таза (установление срока беременности)">УЗИ органов малого таза (установление срока беременности)</option>')
      }
    }
  }

  send() {
    this.XHR.open('POST', this.url, true)
    this.XHR.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    this.XHR.send(this.DATA)
  }
}

