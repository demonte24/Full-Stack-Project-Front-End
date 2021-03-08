'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const breedEvents = require('./breeds/events')
const authEvents = require('./auth/events')
$('#change-password').hide()
$('#sign-out').hide()
$('#breeds-index').hide()
$('#breeds-create').hide()
$('#breeds-update').hide()
$('#breeds-destroy').hide()
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#breeds-index').on('click', breedEvents.onIndexbreeds)
  $('#breeds-destroy').on('submit', breedEvents.onDestroybreed)
  $('#breeds-update').on('submit', breedEvents.onUpdatebreed)
  $('#breeds-create').on('submit', breedEvents.onCreatebreed)
  // // our dynamic destroy buttons will not initially be on the screen
  // // so we need to target their container element `#breeds-display` and then
  // // filter for our destroy buttons `.breeds-destroy-dynamic` inside of the container
  $('#breeds-display').on('click', '.breeds-destroy-dynamic', breedEvents.onDynamicDestroybreed)
  // so we need to target their container element `#breeds-display` and then
  // filter for our update forms `.breeds-update-dynamic` inside of the container
  $('#breeds-display').on('submit', '.breeds-update-dynamic', breedEvents.onDynamicUpdatebreed)
})
