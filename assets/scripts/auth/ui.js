const store = require('./../store')
const events = require('./events')
const api = require('./api')


const signUpSuccess = function(response) {
  $('#message').text('Thank you for signing up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function(response) {
  $('#error-message').text('Sign up failed, try again')
  $('form').trigger('reset')
}

const signInSuccess = function(response) {
  store.user = response.user
$('#message').text('Welcome to PAWSOMEDogs!')
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()

  $('#breeds-index').show()
  $('#breeds-create').show()
  $('#breeds-update').show()
  $('#breeds-destroy').show()
  $('#breeds-display').show()

  $('#dogs-index').show()
  $('#dogs-create').show()
  $('#dogs-update').show()
  $('#dogs-destroy').show()
}

const signInFailure = function(response) {
  $('#error-message').text('Sign In failed, try again')
  $('form').trigger('reset')
}

const changePasswordSuccess = function(response) {
  $('#message').text('Your password has been successfully changed!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function(response) {
  $('#error-message').text('Change Password failed, try again')
  $('form').trigger('reset')
}

const signOutSuccess = function(response) {

  $('#message').text('Thank you for your input on our PawFriends!')
    $('#sign-out').trigger('reset')
    $('#sign-in').show()
    $('#sign-up').show()
    $('#change-password').hide()
    $('#sign-out').hide()
    $('#breeds-index').hide()
    $('#breeds-create').hide()
    $('#breeds-update').hide()
    $('#breeds-destroy').hide()
    $('#breeds-display').hide()
}

const signOutFailure = function(response) {
  $('#error-message').text('Sign Out failed, try again')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
