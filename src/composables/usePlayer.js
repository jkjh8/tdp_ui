import { api } from '/src/boot/axios'
import { socket } from 'src/composables/useSocketIO'

const loadFile = (file) => {
  socket.emit('pCommand', { command: 'loadfile', values: file })
}

export { loadFile }
