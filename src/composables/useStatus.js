import { ref } from 'vue'

const pStatus = ref({})
const pTime = ref({
  duration: 0,
  currentTime: 0,
  durationMS: '00:00',
  currentTimeMS: '00:00'
})

export { pStatus, pTime }
