<script setup>
import { pStatus } from 'src/composables/useStatus.js'
</script>

<template>
  <div class="row no-wrap justify-between items-start">
    <div class="text-weight-bold">IP Address</div>
    <div>
      <div v-for="(item, idx) in pStatus.nics" :key="idx">
        <div class="text-body text-blue-10">IPv4: {{ item.ipv4 }}</div>
        <div class="text-caption">MAC: {{ item.mac }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
