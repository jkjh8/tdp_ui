<script setup>
// composables
import { socket } from 'src/composables/useSocketIO'
import { pTime } from 'src/composables/useTime'

const updateTimeFromSlide = (time) => {
  console.log(time)
  socket.emit('pCommands', { command: 'seek', time })
}
const panning = (value) => {
  socket.emit('pCommands', { command: 'panning', value })
}
</script>

<template>
  <div class="row no-wrap items-center q-mx-sm q-gutter-x-md">
    <q-slider
      :model-value="pTime.currentTime"
      :min="0"
      :max="pTime.duration"
      :step="0.01"
      label
      :label-value="pTime.currentTimeMS"
      @update:model-value="updateTimeFromSlide"
      @pan="panning"
    />
    <div class="text-caption">{{ pTime.currentTimeMS }}/{{ pTime.durationMS }}</div>
  </div>
</template>

<style scoped></style>
