<script setup>
import { format } from 'quasar'
// components
import DelayedTooltip from '/src/components/delayedTooltip'
// composables
import { files, avExt, filesCol } from '/src/composables/useFiles.js'
import { loadFile } from '/src/composables/usePlayer'
const { humanStorageSize } = format
</script>

<template>
  <q-table
    table-header-class="bg-grey-3"
    :rows="files"
    :columns="filesCol"
    :pagination="{ rouwPerPage: 0 }"
    hide-pagination
    wrap-cells
  >
    <template #body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          {{ props.row.name }}
        </q-td>
        <q-td key="type" :props="props">
          {{ props.row.ext.substring(1).toUpperCase() }}
        </q-td>
        <q-td key="size" :props="props">
          {{ humanStorageSize(props.row.size) }}
        </q-td>
        <q-td key="actions" :props="props">
          <div>
            <q-btn
              round
              flat
              icon="input"
              size="sm"
              color="primary"
              @click="loadFile(props.row)"
            >
              <DelayedTooltip msg="Load" />
            </q-btn>
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<style scoped></style>
