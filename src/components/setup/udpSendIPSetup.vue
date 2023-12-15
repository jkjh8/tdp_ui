<script setup>
import { useQuasar } from 'quasar'
import { pStatus } from 'src/composables/useStatus.js'
import { api } from 'src/boot/axios.js'
// components
import IPSetup from 'src/components/dialogs/ipSetup'

const $q = useQuasar()
function ipSetup() {
  $q.dialog({
    component: IPSetup,
    componentProps: {
      current: pStatus.value.udpsendip
    }
  }).onOk(async (ip) => {
    await api.put('/setup/udpsendip', { ip })
  })
}
</script>

<template>
  <div class="row no-wrap justify-between items-center">
    <div class="text-weight-bold">UDP Send Address</div>
    <div class="row no-wrap items-center">
      <div>{{ pStatus.udpsendip }}</div>
      <q-btn
        round
        flat
        color="primary"
        size="sm"
        icon="edit"
        @click="ipSetup"
      ></q-btn>
    </div>
  </div>
</template>

<style scoped></style>
