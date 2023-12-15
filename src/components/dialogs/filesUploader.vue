<script setup>
import { useQuasar, useDialogPluginComponent } from 'quasar'
// components
import DelayedTooltip from '../delayedTooltip'
// conposables
import { addr } from '/src/boot/axios'

// call functions
const $q = useQuasar()
const { dialogRef, onDialogOK, onDialogCancel } = useDialogPluginComponent()

// get url
const getUrl = () => {
  return `${addr}/api/files/upload`
}

const onRejected = (rejectedEntries) => {
  $q.notify({
    type: 'negative',
    message: `${rejectedEntries.length} file(s) did not pass validation constraints`
  })
}
</script>

<template>
  <q-dialog ref="dialogRef" persistent>
    <q-uploader
      class="uploader"
      multiple
      :url="getUrl"
      :field-name="(file) => encodeURIComponent(file.name)"
      color="blue-grey-8"
      accept=".mkv,image/*, video/*, audio/*"
      @rejected="onRejected"
    >
      <template #header="scope">
        <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
          <!-- clear all btn -->
          <q-btn
            v-if="scope.queuedFiles.length > 0"
            round
            dense
            flat
            icon="clear_all"
            @click="scope.removeQueuedFiles"
          >
            <DelayedTooltip msg="Clear All" />
          </q-btn>
          <!-- remove uploaded files -->
          <q-btn
            v-if="scope.uploadedFiles.length > 0"
            round
            dense
            flat
            icon="done_all"
            @click="scope.removeUploadedFiles"
          >
            <DelayedTooltip msg="Remove Uploaded Files" />
          </q-btn>
          <!-- is uploading -->
          <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
          <!-- Name Tag -->
          <div class="col q-px-sm">
            <div class="q-uploader__title">Upload Files</div>
            <div class="q-uploader__subtitle">
              {{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}
            </div>
          </div>
          <!-- add files -->
          <q-btn
            v-if="scope.canAddFiles"
            round
            dense
            flat
            type="a"
            icon="add_box"
            @click="scope.pickFiles"
          >
            <q-uploader-add-trigger />
            <DelayedTooltip msg="Pick Files" />
          </q-btn>
          <!-- upload files -->
          <q-btn
            v-if="scope.canUpload"
            round
            dense
            flat
            icon="cloud_upload"
            @click="scope.upload"
          >
            <DelayedTooltip msg="Upload Files" />
          </q-btn>
          <!-- abort upload -->
          <q-btn
            v-if="scope.isUploading"
            round
            dense
            flat
            icon="clear"
            @click="scope.abort"
          >
            <DelayedTooltip msg="Abrot Upload" />
          </q-btn>
          <!-- close dialog -->
          <q-btn
            dense
            round
            flat
            color="blue-grey-2"
            icon="close"
            @click="onDialogOK"
          >
            <DelayedTooltip msg="Close" />
          </q-btn>
        </div>
      </template>
    </q-uploader>
  </q-dialog>
</template>

<style scoped>
.uploader {
  min-width: 400px;
  max-width: 600px;
}
</style>
