import { api } from '/src/boot/axios'
import { socket } from 'src/composables/useSocketIO'
import { pStatus } from 'src/composables/useStatus'

const fnLoadFile = (file) => {
  socket.emit('pCommands', { command: 'loadfile', values: file })
}

const fnPlay = async () => {
  try {
    socket.emit('pCommands', { command: 'play' })
    // const r = await api.get('/player/play')
    console.log('Play Btn Result: ', r)
  } catch (err) {
    console.error('Play Btn Error: ', err)
  }
}

const fnPause = async () => {
  try {
    // const r = await api.get('/player/pause')
    socket.emit('pCommands', { command: 'pause' })
    console.log('Pause Btn Result: ', r)
  } catch (err) {
    console.error('Pause Btn Result: ', err)
  }
}

const setFullscreen = (value) => {
  socket.emit('pCommands', { command: 'fullscreen', value })
}

export { fnLoadFile, fnPlay, fnPause, setFullscreen }
