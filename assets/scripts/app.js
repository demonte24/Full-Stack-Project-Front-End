'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const breedEvents = require('./auth/events')
$('#change-password').hide()
$('#sign-out').hide()
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', breedEvents.onSignUp)
  $('#sign-in').on('submit', breedEvents.onSignIn)
  $('#change-password').on('submit', breedEvents.onChangePassword)
  $('#sign-out').on('click', breedEvents.onSignOut)
  $('#breeds-index').on('click', breedEvents.onIndexBooks)
  // select our #breeds-show form, when it is submitted, run onShowBook
  $('#breeds-show').on('submit', breedEvents.onShowBook)
  $('#breeds-destroy').on('submit', breedEvents.onDestroyBook)
  // select our #breeds-update form, when it is submitted run onUpdateBook
  $('#breeds-update').on('submit', breedEvents.onUpdateBook)
  $('#breeds-create').on('submit', breedEvents.onCreateBook)
  // our dynamic destroy buttons will not initially be on the screen
  // so we need to target their container element `#breeds-display` and then
  // filter for our destroy buttons `.breeds-destroy-dynamic` inside of the container
  $('#breeds-display').on('click', '.breeds-destroy-dynamic', breedEvents.onDynamicDestroyBook)
  // so we need to target their container element `#breeds-display` and then
  // filter for our update forms `.breeds-update-dynamic` inside of the container
  $('#breeds-display').on('submit', '.breeds-update-dynamic', breedEvents.onDynamicUpdateBook)
})
