import axios from 'axios'

const api = axios.create({
  baseURL: window.location.href + '/api/'
})

export { api }
