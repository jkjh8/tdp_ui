<script setup>
import { format, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
// components
import DelayedTooltip from '/src/components/delayedTooltip'
import DeleteFileDialog from '/src/components/dialogs/deleteFile'
// composables
import { files, avExt, filesCol, fnGetFiles } from '/src/composables/useFiles.js'
import { fnLoadFile } from '/src/composables/usePlayer'

const $q = useQuasar()
const { humanStorageSize } = format

const fnDeleteFile = (file) => {
  $q.dialog({
    component: DeleteFileDialog,
    componentProps: {
      current: file.base
    }
  }).onOk(async () => {
    try {
      $q.loading.show()
      const r = await api.delete('/files', { params: { ...file } })
      console.log(r)
      await fnGetFiles()
      $q.loading.hide()
    } catch (error) {
      $q.loading.hide()
      console.error(error)
    }
  })
}
</script>

<template>
  <q-table
    table-header-class="bg-grey-3"
    :rows="files"
    :columns="filesCol"
    :pagination="{ rowsPerPage: 0 }"
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
          <div class="q-gutter-x-sm">
            <q-btn
              round
              flat
              icon="input"
              size="sm"
              color="primary"
              @click="fnLoadFile(props.row)"
            >
              <DelayedTooltip msg="Load" />
            </q-btn>
            <q-btn
              round
              flat
              icon="delete"
              size="sm"
              color="red"
              @click="fnDeleteFile(props.row)"
            >
              <DelayedTooltip msg="Delete" />
            </q-btn>
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<style scoped></style>
