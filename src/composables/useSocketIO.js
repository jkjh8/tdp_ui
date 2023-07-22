import { io } from 'socket.io-client'
import { pStatus } from './useStatus'
import { pTime } from './useTime'

let socket

const initSocket = (address) => {
  socket = io(`${address}/ui`, {
    reconnectionDelayMax: 5000,
    transports: ['websocket'],
    autoConnect: true
  })
  socket.on('pStatus', (status) => {
    pStatus.value = { ...status }
    console.log('pStatus updated', pStatus.value)
  })
  socket.on('Ptime', (time) => {
    pTime.value = { ...time }
  })
  socket.on('connect', () => {
    console.log(`connecting to socket.io id=${socket.id}`)
  })
}

export { socket, initSocket }
