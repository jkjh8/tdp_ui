import { ref } from 'vue'
import { ms, m, s } from 'time-convert'

const pTime = ref({
  duration: 0,
  currentTime: 0,
  durationMS: '00:00:00',
  currentTimeMS: '00:00:00'
})

const msToMS = (time) => {
  return ms
    .to(
      m,
      s
    )(time)
    .map((n) => (n < 10 ? '0' + n : n.toString()))
    .join(':')
}

const msToHMS = (time) => {
  return ms
    .to(
      h,
      m,
      s
    )(time)
    .mapk((n) => (n < 10 ? '0' + n : n.toString()))
    .join(':')
}

export { pTime, msToMS, msToHMS }
