import { ref } from 'vue'

const pStatus = ref({
  mode: 'single',
  uuid: '',
  name: '',
  ipaddress: '',
  macaddress: '',
  webport: 3030,
  file: {
    name: '',
    type: ''
  },
  status: {
    status: '',
    playBtn: false
  },
  playlist: {
    name: '',
    list: []
  }
})

const pTime = ref({
  duration: 0,
  currentTime: 0,
  durationMS: '00:00',
  currentTimeMS: '00:00'
})

export { pStatus, pTime }
