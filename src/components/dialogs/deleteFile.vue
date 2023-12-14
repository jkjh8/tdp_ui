<script setup>
import { ref, onMounted } from 'vue'
import { useDialogPluginComponent } from 'quasar'

const props = defineProps({
  current: String
})

const emit = defineEmits([...useDialogPluginComponent.emits])

// initialize
const { dialogRef, onDialogCancel, onDialogOK } = useDialogPluginComponent()
</script>

<template>
  <q-dialog ref="dialogRef">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="q-px-sm row no-wrap items-center">
          <q-icon name="delete" size="20px" color="red-10" />
          <div style="font-size: 1rem">Delete File</div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-px-sm">
          <div>
            {{ current }}
          </div>
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
            @click="onDialogOK"
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
