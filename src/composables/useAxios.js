import axios from 'axios'

let api

const initAxios = (addr) => {
  api = axios.create({
    baseURL: addr + '/api/'
  })
}

export { api, initAxios }
