<script setup>
import { onBeforeMount } from 'vue'

import AudioDevices from 'src/components/setup/audioDevices'
import { pStatus, updatePlayerStatus } from 'src/composables/useStatus.js'
// components
import IPaddressTab from 'src/components/setup/ipaddressTab'
import WebPort from 'src/components/setup/webPortSetup'
import ControlPort from 'src/components/setup/tpcPortSetup'
import UDPPort from 'src/components/setup/udpPortSetup'
import UDPSendPort from 'src/components/setup/udpSendPortSetup'
import UDPSendAddress from 'src/components/setup/udpSendIPSetup'
// composables
import { api } from 'src/boot/axios'

async function updateValue() {
  const r = await api.post('/setup', { ...pStatus.value })
}
</script>

<template>
  <div class="q-pa-md">
    <q-card class="bg-grey-1" flat>
      <q-card-section>
        <div class="row justify-between">
          <!-- front -->
          <div class="row no-wrap items-center q-gutter-x-sm">
            <q-icon color="grey-8" size="sm" name="settings" />
            <div>Device Setup</div>
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-px-lg q-gutter-y-sm">
        <!-- device ip address list -->
        <IPaddressTab />
        <!-- device control port(web port) -->
        <WebPort />
        <!-- device control port(tcp port) -->
        <ControlPort />
        <!-- udp control port(ucp port) -->
        <UDPPort />
        <!-- UDP Send Address -->
        <UDPSendAddress />
        <UDPSendPort />
        <!-- Audio Device Select -->
        <AudioDevices />
        <!-- show logo -->
        <div class="row no-wrap justify-between items-center">
          <div class="text-weight-bold">Show Logo</div>
          <q-toggle v-model="pStatus.showlogo" @update:model-value="updateValue" />
        </div>
        <!-- start at fullscreen -->
        <div class="row no-wrap justify-between items-center">
          <div class="text-weight-bold">Start At Fullscreen</div>
          <q-toggle
            v-model="pStatus.startatfullscreen"
            @update:model-value="updateValue"
          />
        </div>
        <!-- play direct -->
        <div class="row no-wrap justify-between items-center">
          <div class="text-weight-bold">Load and Play</div>
          <q-toggle
            v-model="pStatus.loadandplay"
            @update:model-value="updateValue"
          />
        </div>
        <!-- <SelectAudioDevice />
        <SetupShowLogo />
        <SetupFullscreen /> -->
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
