import { io } from 'socket.io-client'
import { pStatus, updatePlayerStatus } from './useStatus'
import { pTime, updateTimes } from './useTime'
let socket

const initSocket = (address) => {
  socket = io(`${address}/ui`, {
    reconnectionDelayMax: 5000,
    transports: ['websocket'],
    autoConnect: true
  })
  socket.on('pStatus', (status) => {
    updatePlayerStatus(status)
    if (process.env.NODE_ENV !== 'production') {
      console.log('pStatus updated', pStatus.value)
    }
  })
  socket.on('pTimes', (time) => {
    updateTimes(time)
  })
  socket.on('connect', () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`connecting to socket.io id=${socket.id}`)
    }
  })
}

export { socket, initSocket }
