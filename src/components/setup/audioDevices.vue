<script setup>
import { ref, onBeforeMount } from 'vue'
import { pStatus } from 'src/composables/useStatus'
import { api } from 'boot/axios'

const selected = ref('')
const devices = ref([])

const displayLabel = () => {
  const current = devices.value.find((d) => d.deviceId == selected.value)
  if (current && current.label) {
    return current.label
  }
  return ''
}
onBeforeMount(async () => {
  const r = await api.get('/player')
  pStatus.value = r.data.status
  selected.value = r.data.status.device.audiocurrentdevice
  devices.value = r.data.status.device.audiodevicelist
})
</script>

<template>
  <div class="row no-wrap justify-between items-center">
    <div class="text-weight-bold">Audio Device</div>
    <div>
      <q-select
        v-model="selected"
        dense
        filled
        :options="devices"
        option-value="deviceId"
        :display-value="displayLabel()"
        emit-value
      ></q-select>
    </div>
  </div>
</template>

<style scoped></style>
