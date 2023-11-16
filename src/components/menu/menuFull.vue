<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="q-gutter-x-md" style="padding-top: 5px">
    <!-- <q-btn
      :class="
        router.currentRoute.value.path === '/playlist'
          ? 'bg-grey-2 text-bold'
          : ''
      "
      style="border-radius: 10px"
      flat
      to="/playlist"
    >
      <div>PLAYLIST</div>
    </q-btn> -->

    <q-btn
      :class="
        router.currentRoute.value.path === '/files' ? 'bg-grey-2 text-bold' : ''
      "
      style="border-radius: 10px"
      flat
      to="/files"
    >
      <div>FILES</div>
    </q-btn>

    <q-btn
      :class="
        router.currentRoute.value.path === '/setup' ? 'bg-grey-2 text-bold' : ''
      "
      style="border-radius: 10px"
      flat
      to="/setup"
    >
      <div>SETUP</div>
    </q-btn>
  </div>
</template>

<style scoped></style>
