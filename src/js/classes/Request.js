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
      }
    }
  }

  send() {
    this.XHR.open('POST', this.url, true)
    this.XHR.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    this.XHR.send(this.DATA)
  }
}