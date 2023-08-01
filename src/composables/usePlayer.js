import { api } from '/src/boot/axios'
import { socket } from 'src/composables/useSocketIO'

const fnLoadFile = (file) => {
  socket.emit('pCommands', { command: 'loadfile', values: file })
}

const fnPlay = async () => {
  try {
    const r = await api.get('/player/play')
    console.log('Play Btn Result: ', r)
  } catch (err) {
    console.error('Play Btn Error: ', err)
  }
}

const fnPause = async () => {
  try {
    const r = await api.get('/player/pause')
    console.log('Pause Btn Result: ', r)
  } catch (err) {
    console.error('Pause Btn Result: ', err)
  }
}

export { fnLoadFile, fnPlay, fnPause }
