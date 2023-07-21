<script setup>
import { ref, onMounted } from 'vue'
// import { currentPath } from 'src/composables/useFiles'

// components
import FilesHeader from 'src/components/files/FilesHeader'
import FilesList from 'src/components/files/FilesList'
// import simpleFileList from 'src/components/files/simpleListFiles'
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
