const onIndexSuccess = function (responseData) {
const breeds = responseData.breed

  let breedsHtml = ''
  breeds.forEach(breed => {
    breedHtml += `
      <h4>Name: ${breed.name}</h4>
      <p>Country: ${breed.country}</p>
      <p>ID: ${breed._id}</p>
      <form class="breeds-update-dynamic" data-id=${breed._id}>
        <input type="text" name="breed[Name]" placeholder="breed Name Here" required>
        <input type="text" name="breed[country]" placeholder="breed country Here" required>
        <button type="submit">Update breed</button>
      </form>
      <button class='breeds-destroy-dynamic' data-id=${breed._id}>Delete breed</button>
      <hr>
    `
  })
  $('#breeds-display').html(breedsHtml)
}
//
// // const onShowSuccess = function (responseData) {
// //
// //   // build HTML element with data for one breed
// //   const breedHtml = `
// //     <h4>Name: ${responseData.breed.name}</h4>
// //     <p>Country: ${responseData.breed.country}</p>
// //     <br>
// //   `
// //
// //   // replace whatever was in the breeds-display element with our breedHtml
// //   $('#breeds-display').html(breedHtml)
// //
// //   // reset all forms
// //   $('form').trigger('reset')
// // }
//
// const onDestroySuccess = function () {
//   // add success message to our breeds-destroy-message element
//   $('#breeds-destroy-message').text('breed successfully deleted!')
//
//   // empty out the breeds-display element in case it was displaying information
//   // about the breed we just deleted, replace with a message for the user to get
//   // all the breeds again.
//   $('#breeds-display').text('breeds have changed! Click "Get All breeds" again to see all the breeds')
//
//   // add class for success messaging
//   $('#breeds-destroy-message').addClass('success')
//
//   // use setTimeout to allow the success message to stay for 5 seconds before
//   // the message is replaced with '' and the 'success' class is removed
//   // setTimeout(() => {
//   //   $('#breeds-destroy-message').text('')
//   //   $('#breeds-destroy-message').removeClass('success')
//   // }, 5000)
//
//   // reset all forms
//   $('form').trigger('reset')
// }
//
// const onUpdateSuccess = function (responseData) {
//   // add success message to our breeds-update-message element
//   $('#breeds-update-message').text('You successfully updated the breed')
//
//   // empty out the breeds-display element in case it was displaying information
//   // about the breed we just updated, replace with a message for the user to get
//   // all the breeds again.
//   $('#breeds-display').text('breeds have changed! Click "Get All breeds" again to see all the breeds.')
//
//   // add class for success messaging
//   $('#breeds-update-message').addClass('success')
//
//   // use setTimeout to allow the success message to stay for 5 seconds before
//   // the message is replaced with '' and the 'success' class is removed
//   // setTimeout(() => {
//   //   $('#breeds-update-message').text('')
//   //   $('#breeds-update-message').removeClass('success')
//   // }, 5000)
//
//   // reset all forms
//   $('form').trigger('reset')
// }
//
const onCreateSuccess = function () {
  $('#breeds-create-message').text('You created a new breed!')
  $('#breeds-display').text('breeds have changed! Click "Get All breeds" again to see all the breeds.')
  $('#breeds-create-message').addClass('success')

  setTimeout(() => {
    $('#breeds-create-message').text('')
    $('#breeds-create-message').removeClass('success')
  }, 5000)

  $('form').trigger('reset')
}
//
const onError = function (err) {
  $('#error-message').text('Something went wrong, please try again.')
  $('#error-message').addClass('failure')

  // use setTimeout to allow the error message to stay for 5 seconds before
  // the message is replaced with '' and the 'failure' class is removed
  // setTimeout(() => {
  //   $('#error-message').text('')
  //   $('#error-message').removeClass('failure')
  // }, 5000)

  // reset all forms
  $('form').trigger('reset')
}
//
module.exports = {
  onIndexSuccess,
  // onDestroySuccess,
  // onUpdateSuccess,
  onCreateSuccess,
  onError
}
