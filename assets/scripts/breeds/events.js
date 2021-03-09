const api = require('./api')
const ui= require('./ui')
const getFormFields = require('../../../lib/get-form-fields')


const onIndexbreeds = function () {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}
//
const onDestroybreed = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.destroyBreed(formData.breed.id)
    .then(ui.onDestroySuccess)
    .catch(ui.onError)
}

const onUpdatebreed = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateBreed(formData.breed.id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}
//
//
const onCreatebreed = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createBreed(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}
//
const onDynamicDestroybreed = function (event) {
  event.preventDefault()
  const destroyButton = event.target
  const id = $(deleteButton).data('id')
  api.destroyBreed(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError)
}


const onDynamicUpdatebreed = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = $(form).data('id')
  api.updateBreed(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}
//
//
module.exports = {
  onIndexbreeds,
  onDestroybreed,
  onUpdatebreed,
  onCreatebreed,
  onDynamicDestroybreed,
  onDynamicUpdatebreed
}
