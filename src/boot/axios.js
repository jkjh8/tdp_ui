import { boot } from 'quasar/wrappers'
import axios from 'axios'

let api, addr
const devServerAddr = `http://${window.location.hostname}:3030`

export default boot(({ app }) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Node ENV: DEV Mode')
    console.log('Server Address: ' + devServerAddr)
    addr = devServerAddr
  } else {
    addr = window.location.href
    if (addr.charAt(addr.length - 1) === '/') {
      return addr.slice(0, -1)
    }
    console.log('Node ENV: Production Mode')
    console.log('Server Address: ' + addr)
  }
  api = axios.create({ baseURL: `${addr}/api` })
})

export { api, addr }
