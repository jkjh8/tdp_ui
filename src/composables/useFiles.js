import { ref } from 'vue'
import { api } from 'src/boot/axios'

const files = ref([])
const defaultPath = ref('')
const avExt = ['.mp4', '.mp3', 'webm', 'mkv', 'wav', 'flac', 'aac']
const filesCol = [
  { name: 'name', label: 'Name', field: 'name', align: 'center', sortable: true },
  { name: 'type', label: 'Type', field: 'type', align: 'center', sortable: true },
  { name: 'size', label: 'Size', field: 'size', align: 'center', sortable: true },
  { name: 'actions', label: 'Actions', align: 'center' }
]
const simpleFilesCol = [
  { name: 'name', label: 'Name', field: 'name', align: 'center', sortable: true },
  { name: 'actions', label: 'Actions', align: 'center' }
]

const fnGetFiles = async () => {
  const r = await api.get('/files')
  files.value = r.data.files
  defaultPath.value = r.data.defaultpath
  if (process.env.NODE_ENV !== 'production') {
    console.log('files updated: ', files.value)
  }
  return r
}

export { files, defaultPath, avExt, filesCol, simpleFilesCol, fnGetFiles }
