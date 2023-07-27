import { api } from '/src/boot/axios'
import { socket } from 'src/composables/useSocketIO'

const fnLoadFile = (file) => {
  socket.emit('pCommand', { command: 'fnLoadfile', values: file })
}

const fnPlay = () => {
  socket.emit('pCommand', { command: 'play' })
}

const fnPause = () => socket.emit('pCommand', { command: 'pause' })

export { fnLoadFile, fnPlay, fnPause }
