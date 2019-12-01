import axios from 'axios'

const baseUrl = 'http://fakerestapi.azurewebsites.net/api';

function getBooks() {
  return axios.get(`${baseUrl}/Books`)

}

export default getBooks;
