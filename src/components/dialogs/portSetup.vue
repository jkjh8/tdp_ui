<script setup>
import { ref, onMounted } from 'vue'
import { useDialogPluginComponent } from 'quasar'

const props = defineProps({
  current: Number
})

const emit = defineEmits([...useDialogPluginComponent.emits])

// initialize
const { dialogRef, onDialogCancel, onDialogOK } = useDialogPluginComponent()

const port = ref(0)

onMounted(() => {
  port.value = props.current
})
</script>

<template>
  <q-dialog ref="dialogRef">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="q-px-sm">
          <div>Change Port</div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-px-sm">
          <q-input v-model="port" dense outlined label="Port" type="number" />
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <div class="q-px-sm">
          <q-btn round flat color="red-10" icon="cancel" @click="onDialogCancel" />
          <q-btn
            round
            flat
            color="primary"
            icon="check_circle"
            @click="onDialogOK(port)"
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
