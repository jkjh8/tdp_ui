<script setup>
import { ref, onBeforeMount } from 'vue'

// components
import FilesHeader from 'src/components/files/FilesHeader'
import FilesList from 'src/components/files/FilesList'

// composables
import { fnGetFiles } from 'src/composables/useFiles'

onBeforeMount(async () => {
  console.log(await fnGetFiles())
})
</script>

<template>
  <div class="q-pa-md">
    <q-card class="bg-grey-1" flat>
      <q-card-section class="q-pb-none q-mb-none">
        <FilesHeader />
      </q-card-section>
      <q-card-section class="q-pt-xs q-mt-none">
        <FilesList class="gt-xs" />
        <!-- <simpleFileList class="lt-sm" /> -->
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
