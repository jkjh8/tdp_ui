import { ref } from 'vue'

const pStatus = ref({
  mode: 'single',
  uuid: '',
  name: '',
  nics: [],
  webport: 3030,
  file: {
    type: '',
    name: '',
    size: 0
  },
  status: {
    status: '',
    playBtn: false
  },
  playlist: {
    name: '',
    list: []
  },
  device: {
    audiocurrentdevice: '',
    audiodevicelist: [],
    width: 800,
    height: 600
  },
  fullscreen: false,
  showlogo: true,
  bgColor: '#fff',
  recentlyFile: []
})

const pTime = ref({
  duration: 0,
  currentTime: 0,
  durationMS: '00:00',
  currentTimeMS: '00:00'
})

const updatePlayerStatus = (status) => {
  pStatus.value = { ...pStatus.value, ...status }
}

export { pStatus, pTime, updatePlayerStatus }
