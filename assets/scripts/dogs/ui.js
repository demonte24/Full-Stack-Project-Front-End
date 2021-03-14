const onIndexSuccess = function (responseData) {
const dogs = responseData
let dogsHtml = ''
  dogs.forEach(dog => {
    dogsHtml += `
      <h4>Name: ${dog.name}</h4>
      <p>Breed: ${dog.breed}</p>
      <p>ID: ${dog._id}</p>


        <form class='dogs-update-dynamic' data-id=${dog._id}>
          <input type='text' name='dog[name]' placeholder='Enter Name Here' required>
          <input type='text' name='dog[breed]' placeholder='Enter dog Here' required>
          <button>Update dog</button>
          <hr>
        </form>
    `
  })
  $('#dogs-display').html(dogsHtml)
  $('#message').text('Here is your list of dogs!')
  $('form').trigger('reset')
}
const onIndexFailure = function () {
  $('#error-message').text('Do not forget to add some dogs first!')
  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  $('#message').text('dog successfully deleted!')
  $('#dogs-display').text('dogs have changed! Click "Get All dogs" again to see all the dogs')
  $('#dogs-destroy-message').addClass('success')
  $('form').trigger('reset')
}
const onDestroyFailure = function () {
  $('#error-message').text('Destroy failed Try Again!')
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  $('#message').text('You successfully updated the dog')
  $('#dogs-display').text('dogs have changed! Click "Get All dogs" again to see all the dogs.')
  $('form').trigger('reset')
}
const onUpdateFailure = function () {
  $('#error-message').text('Update failed Try Again!')
  $('form').trigger('reset')
}

const onCreateSuccess = function () {
  $('#message').text('You created a new dog!')
  $('#dogs-display').text('dogs have changed! Click "Get All dogs" again to see all the dogs.')
  $('#message').addClass('success')
  $('form').trigger('reset')
}
const onCreateFailure = function () {
  $('#error-message').text('Create failed Try Again!')
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onIndexFailure,
  onDestroyFailure,
  onUpdateFailure,
  onCreateFailure,
}
