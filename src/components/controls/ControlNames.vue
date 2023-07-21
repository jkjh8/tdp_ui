<script setup>
import { pStatus } from 'src/composables/useStatus.js'
</script>

<template>
  <div class="row no-wrap justify-center items-center">
    <div>{{ pStatus.file.name ? pStatus.file.name : 'Please load file' }}</div>
  </div>
</template>

<style scoped></style>
