const app = {
  init: function () {
    this.cacheDOMElements()
    this.bindEvents()
  },

  cacheDOMElements: function () {
    this.submitButton = document.querySelector('#app form button')
    this.zipCodeField = document.querySelector('#app form input')
    this.content = document.querySelector('#app main')
  },

  bindEvents: function () {
    this.submitButton.addEventListener('click', this.run.bind(this))
  },

  isValidZip: function (zipCode) {
    return /^\d{5}-?\d{3}$/.test(zipCode)
  },

  run: function (event) {
    event.preventDefault()

    const zipCode = this.zipCodeField.value.replace(/[\s.]/g, '').trim()

    if (!this.isValidZip(zipCode)) {
      console.error('Invalid ZIP code format.')
      this.createLine('Deu ruim')
      return
    }

    console.log(zipCode)

    axios
      .get(`https://viacep.com.br/ws/${zipCode}/json`)
      .then(({ data }) => {
        this.displayData([
          data.logradouro,
          `${data.localidade} / ${data.uf}`,
          data.bairro
        ])
      })
      .catch(this.handleError)
  },

  handleError: function (error) {
    if (error.response) {
      console.error('Error status', error.response.status)
      console.error('Error details', error.response.data)
      this.createLine('Deu ruim')
    } else if (error.request) {
      console.error('No response received', error.request)
    } else {
      console.error('Error', error.message)
    }
  },

  displayData: function (dataArray) {
    dataArray.forEach(this.createLine.bind(this))
  },

  createLine: function (text) {
    const line = document.createElement('p')
    line.textContent = text
    this.content.appendChild(line)
  }
}

app.init()
