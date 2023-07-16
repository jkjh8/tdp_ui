<script setup>
import { pTime } from 'src/composables/useTime'
</script>

<template>
  <div>
    <q-slider
      :model-value="pTime.currentTime"
      :min="0"
      :max="pTime.duration"
      :step="0.01"
      label
    />
  </div>
</template>

<style scoped></style>
