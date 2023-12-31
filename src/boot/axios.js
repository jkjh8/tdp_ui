import { boot } from 'quasar/wrappers'
import axios from 'axios'

let api, addr
const devServerAddr = `http://${window.location.hostname}:3030`

if (process.env.NODE_ENV !== 'production') {
  addr = devServerAddr
  if (process.env.NODE_ENV !== 'production') {
    console.log('Node ENV: DEV Mode')
    console.log('Server Address: ' + devServerAddr)
  }
} else {
  addr = window.location.origin
  if (process.env.NODE_ENV !== 'production') {
    console.log('Node ENV: Production Mode')
    console.log('Server Address: ' + addr)
  }
}

export default boot(({ app }) => {
  api = axios.create({ baseURL: `${addr}/api` })
})

export { api, addr }
