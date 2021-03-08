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
// const onDestroybreed = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   // console.log('breedData is', formData)
//   api.destroybreed(formData.breed.id)
//     .then(ui.onDeleteSuccess)
//     .catch(ui.onError)
// }
//
// const onUpdatebreed = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.update(formData.breed.id, formData)
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onError)
// }
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
// const onDynamicDestroybreed = function (event) {
//   event.preventDefault()
//   const destroyButton = event.target
//   const id = $(deleteButton).data('id')
//   api.destroybreed(id)
//     .then(ui.onDeleteSuccess)
//     .catch(ui.onError)
// }
//
//
// const onDynamicUpdatebreed = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   const id = $(form).data('id')
//   api.update(id, formData)
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onError)
// }
//
//
module.exports = {
  onIndexbreeds,
  // onDestroybreed,
  // onUpdatebreed,
  onCreatebreed,
  // onDynamicDestroybreed,
  // onDynamicUpdatebreed
}
