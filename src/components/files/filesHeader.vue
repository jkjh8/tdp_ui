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
      <q-icon color="yellow-8" size="sm" name="folder" />
      <div>Local Files</div>
    </div>
    <!-- back -->
    <div>
      <q-btn flat round color="primary" icon="upload" @click="fnOpenfilesUploadDialog">
        <DelayedTooltip msg="Upload Files" />
      </q-btn>
    </div>
  </div>
</template>

<style scoped></style>
