import { ref } from 'vue'

const apiAddr = ref('')
const devServerAddr = `http://${window.location.hostname}:3030`

const checkAddr = () => {
  return new Promise((resolve, reject) => {
    // timeout
    setTimeout(() => {
      reject(new Error('timeout'))
    }, 5000)

    //check address
    // check debug mode
    if (process.env.NODE_ENV !== 'production') {
      console.log('Node ENV: DEV Mode')
      console.log('Server Address: ' + devServerAddr)
      resolve(devServerAddr)
    } else {
      // retrun api address with port number
      const addr = window.location.href
      if (addr.charAt(addr.length - 1) === '/') {
        resolve(addr.slice(0, -1))
      }
      console.log('Node ENV: Production Mode')
      console.log('Server Address: ' + addr)
      resolve(addr)
    }
  })
}

export { apiAddr, checkAddr }
