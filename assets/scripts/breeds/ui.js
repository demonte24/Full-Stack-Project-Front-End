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
const onDestroySuccess = function () {
  $('#message').text('breed successfully deleted!')
  $('#breeds-display').text('breeds have changed! Click "Get All breeds" again to see all the breeds')
  $('#breeds-destroy-message').addClass('success')
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  $('#message').text('You successfully updated the breed')
  $('#breeds-display').text('breeds have changed! Click "Get All breeds" again to see all the breeds.')
  // $('#breeds-update-message').addClass('success')
  $('form').trigger('reset')
}

const onCreateSuccess = function () {
  $('#message').text('You created a new breed!')
  $('#breeds-display').text('breeds have changed! Click "Get All breeds" again to see all the breeds.')
  $('#message').addClass('success')
  $('form').trigger('reset')
}
//
const onError = function (err) {
  $('#message').text('Something went wrong, please try again.')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}
//
module.exports = {
  onIndexSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onError
}
