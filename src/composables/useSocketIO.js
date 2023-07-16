import { io } from 'socket.io-client'

let socket

const initSocket = (address) => {
  socket = io(address, {
    reconnectionDelayMax: 5000,
    transports: ['websocket'],
    autoConnect: true
  })
  socket.on('connect', () => {
    console.log(`connecting to socket.io id=${socket.id}`)
  })
}

export { socket, initSocket }
