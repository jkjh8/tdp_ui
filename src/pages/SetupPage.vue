<script setup>
import { onBeforeMount } from 'vue'

// components
import SetupHeader from 'src/components/setup/setupHeader'
// import { playerState } from 'src/composables/usePlayerState'
// composables
import { api } from 'src/composables/useAxios'
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
      <q-card-section>
        <!-- <SelectAudioDevice />
        <SetupShowLogo />
        <SetupFullscreen /> -->
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
