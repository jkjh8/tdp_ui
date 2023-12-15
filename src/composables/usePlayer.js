import { socket } from 'src/composables/useSocketIO'

const fnLoadFile = (file) => {
  socket.emit('pCommands', { command: 'loadfile', values: file })
}

const fnPlay = async () => {
  try {
    socket.emit('pCommands', { command: 'play' })
  } catch (err) {
    console.error('Play Btn Error: ', err)
  }
}

const fnPause = async () => {
  try {
    socket.emit('pCommands', { command: 'pause' })
  } catch (err) {
    console.error('Pause Btn Result: ', err)
  }
}

const fnStop = () => {
  socket.emit('pCommands', { command: 'stop' })
}

const setFullscreen = (value) => {
  socket.emit('pCommands', { command: 'fullscreen', value })
}

export { fnLoadFile, fnPlay, fnPause, fnStop, setFullscreen }
