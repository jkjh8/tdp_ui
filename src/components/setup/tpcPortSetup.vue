<script setup>
import { useQuasar } from 'quasar'
import { pStatus } from 'src/composables/useStatus.js'
import { api } from 'src/boot/axios.js'
// components
import PortSetup from 'src/components/dialogs/portSetup'

const $q = useQuasar()
function portSetup() {
  $q.dialog({
    component: PortSetup,
    componentProps: {
      current: pStatus.value.controlport
    }
  }).onOk(async (port) => {
    await api.put('/setup/tcp', { port })
  })
}
</script>

<template>
  <div class="row no-wrap justify-between items-center">
    <div class="text-weight-bold">Control Port</div>
    <div class="row no-wrap items-center">
      <div>{{ pStatus.controlport }}</div>
      <q-btn
        round
        flat
        color="primary"
        size="sm"
        icon="edit"
        @click="portSetup"
      ></q-btn>
    </div>
  </div>
</template>

<style scoped></style>
