<script setup>
import { pTime } from 'src/composables/useTime'
</script>

<template>
  <div class="row no-wrap items-center q-mx-sm q-gutter-x-sm">
    <q-slider
      :model-value="pTime.currentTime"
      :min="0"
      :max="pTime.duration"
      :step="0.01"
      label
    />
    <div class="text-caption">
      {{ pTime.currentTimeMS }}/{{ pTime.durationMS }}
    </div>
  </div>
</template>

<style scoped></style>
