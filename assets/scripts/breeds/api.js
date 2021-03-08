const config = require('../config')
const store = require('./../store')

const index = function () {
  return  $.ajax({
    method: 'GET',
    url: config.apiUrl + '/breeds',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
//
//
const destroyBreed = function (id) {
  return  $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/breeds/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateBreed = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/breeds/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const createBreed = function (formData) {
  // const breed = formData.breed
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/breeds',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData,
  })
}
//
//
module.exports = {
  index,
  destroyBreed,
  updateBreed,
  createBreed
}
