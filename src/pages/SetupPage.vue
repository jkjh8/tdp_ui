<script setup>
import { onBeforeMount } from 'vue'

import AudioDevices from 'src/components/setup/audioDevices'
import { pStatus } from 'src/composables/useStatus.js'
// components
import SetupHeader from 'src/components/setup/setupHeader'
// import { playerState } from 'src/composables/usePlayerState'
// composables
import { api } from 'src/boot/axios'
// import SelectAudioDevice from 'src/components/setup/selectAudioDevice'
// import SetupShowLogo from 'src/components/setup/showLogo'
// import SetupFullscreen from 'src/components/setup/startWithFullscreen'

// onBeforeMount(async () => {
//   const r = await api.get('/setup/updatesetup')
//   playerState.value = { ...r.data.value }
// })
</script>

<template>
  <div class="q-pa-md">
    <q-card class="bg-grey-1" flat>
      <q-card-section>
        <SetupHeader />
      </q-card-section>
      <q-card-section class="q-px-lg q-gutter-y-sm">
        <!-- device name -->
        <div class="row no-wrap justify-between items-center">
          <div class="text-weight-bold">NAME</div>
          <div class="row no-wrap items-center">
            <div>
              {{ pStatus.name ? pStatus.name : 'No Name' }}
            </div>
            <q-btn round flat color="primary" size="sm" icon="edit"></q-btn>
          </div>
        </div>
        <!-- device uuid -->
        <div class="row no-wrap justify-between items-center">
          <div class="text-weight-bold">Device ID</div>
          <div class="row no-wrap items-center">
            <div>
              {{ pStatus.uuid ? pStatus.uuid : 'No ID' }}
            </div>
            <q-btn round flat color="primary" size="sm" icon="refresh"></q-btn>
          </div>
        </div>
        <!-- device ip address list -->
        <div class="row no-wrap justify-between items-start">
          <div class="text-weight-bold">IP Address</div>
          <div>
            <div v-for="(item, idx) in pStatus.nics" :key="idx">
              <div class="text-body text-blue-10">IPv4: {{ item.ipv4 }}</div>
              <div class="text-caption">MAC: {{ item.mac }}</div>
            </div>
          </div>
        </div>
        <!-- device control port(web port) -->
        <div class="row no-wrap justify-between items-center">
          <div class="text-weight-bold">Control Port</div>
          <div class="row no-wrap items-center">
            <div>{{ pStatus.webport }}</div>
            <q-btn round flat color="primary" size="sm" icon="edit"></q-btn>
          </div>
        </div>
        <!-- Audio Device Select -->
        <AudioDevices />
        <div class="row no-wrap justify-between items-center">
          <div class="text-weight-bold">Show Logo</div>
          <q-toggle v-model="pStatus.showlogo" />
        </div>
        <div class="row no-wrap justify-between items-center">
          <div class="text-weight-bold">Start At Fullscreen</div>
          <q-toggle v-model="pStatus.startatfullscreen" />
        </div>
        <div>update logo</div>
        <div>start at fullscreen</div>
        <!-- <SelectAudioDevice />
        <SetupShowLogo />
        <SetupFullscreen /> -->
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
