<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
// components
import MenuFull from 'src/components/menu/menuFull'
import MenuSmall from 'src/components/menu/menuSmall'

// composables
import { addr } from 'src/boot/axios'
import { socket, initSocket } from 'src/composables/useSocketIO'
import PlayerControls from 'components/controls/PlayerControls.vue'

const router = useRouter()
onBeforeMount(async () => {
  // initialize socket io
  await initSocket(addr)
})
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header row no-wrap justify-between items-center">
      <div class="row q-gutter-x-sm pointer" @click="router.push('/')">
        <q-icon name="svguse:icons.svg#logo" size="md" />
        <div class="header-font">Player Controls</div>
      </div>
      <!-- Menu Components -->
      <MenuFull class="gt-xs" />
      <MenuSmall class="lt-sm" />
      <!-- <UserStatus /> -->
    </q-header>

    <q-page-container>
      <div class="router-view">
        <router-view />
      </div>
    </q-page-container>

    <q-footer class="footer">
      <PlayerControls />
    </q-footer>
  </q-layout>
</template>

<style scoped>
.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
