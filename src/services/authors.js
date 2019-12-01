import axios from 'axios'

const baseUrl = 'http://fakerestapi.azurewebsites.net';

function getAuthors() {
  return axios.get(`${baseUrl}/api/Authors`)

}

function getAuthorsOfBook(bookId) {
  return axios.get(`${baseUrl}/authors/books/${bookId}`)
}

export { getAuthors, getAuthorsOfBook };


