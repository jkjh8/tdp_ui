import { api } from '/src/boot/axios'
import { socket } from 'src/composables/useSocketIO'

const fnLoadFile = (file) => {
  socket.emit('pCommands', { command: 'loadfile', values: file })
}

const fnPlay = () => {
  socket.emit('pCommands', { command: 'play' })
}

const fnPause = () => socket.emit('pCommands', { command: 'pause' })

export { fnLoadFile, fnPlay, fnPause }
