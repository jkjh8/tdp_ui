<script setup>
import { files, avExt, filesCol } from '/src/composables/useFiles.js'
</script>

<template>
  <q-table
    table-header-class="bg-grey-3"
    :rows="files"
    :columns="filesCol"
    :pagination="{ rouwPerPage: 0 }"
    hide-pagination
    wrap-cells
  >
  </q-table>
</template>

<style scoped></style>
