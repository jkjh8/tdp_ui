<script setup>
import { onBeforeMount } from 'vue'
import { useQuasar } from 'quasar'
// components
import FilesUploader from '/src/components/dialogs/filesUploader'
import DelayedTooltip from '/src/components/delayedTooltip'

const $q = useQuasar()

const fnOpenfilesUploadDialog = () => {
  $q.dialog({
    component: FilesUploader
  })
}
</script>

<template>
  <div class="row justify-between">
    <!-- front -->
    <div class="row no-wrap items-center q-gutter-x-sm">
      <q-icon color="grey-8" size="sm" name="settings" />
      <div>Device Setup</div>
    </div>
  </div>
</template>

<style scoped></style>
