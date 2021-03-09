const onIndexSuccess = function (responseData) {
const breeds = responseData
let breedsHtml = ''
  breeds.forEach(breed => {
    breedsHtml += `
      <h4>Name: ${breed.name}</h4>
      <p>Country: ${breed.country}</p>
      <p>ID: ${breed._id}</p>


        <form class='breeds-update-dynamic' data-id=${breed._id}>
          <input type='text' name='breed[name]' placeholder='Enter Name Here' required>
          <input type='text' name='breed[country]' placeholder='Enter Country Here' required>
          <button>Update breed</button>
          <hr>
        </form>
    `
  })
  $('#breeds-display').html(breedsHtml)
  $('#message').text('Here is your list of Beeds!')
  $('form').trigger('reset')
}
const onIndexFailure = function () {
  $('#error-message').text('Do not forget to add some Breeds first!')
  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  $('#message').text('breed successfully deleted!')
  $('#breeds-display').text('breeds have changed! Click "Get All breeds" again to see all the breeds')
  $('#breeds-destroy-message').addClass('success')
  $('form').trigger('reset')
}
const onDestroyFailure = function () {
  $('#error-message').text('Destroy failed Try Again!')
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  $('#message').text('You successfully updated the breed')
  $('#breeds-display').text('breeds have changed! Click "Get All breeds" again to see all the breeds.')
  $('form').trigger('reset')
}
const onUpdateFailure = function () {
  $('#error-message').text('Update failed Try Again!')
  $('form').trigger('reset')
}

const onCreateSuccess = function () {
  $('#message').text('You created a new breed!')
  $('#breeds-display').text('breeds have changed! Click "Get All breeds" again to see all the breeds.')
  $('#message').addClass('success')
  $('form').trigger('reset')
}
const onCreateFailure = function () {
  $('#error-message').text('Create failed Try Again!')
  $('form').trigger('reset')
}
// const onError = function (err) {
//   $('#error-message').text('Something went wrong, please try again.')
//   $('#message').addClass('failure')
//   $('form').trigger('reset')
// }
//
module.exports = {
  onIndexSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onIndexFailure,
  onDestroyFailure,
  onUpdateFailure,
  onCreateFailure,
  // onError
}
