import { ref } from 'vue'
import { api } from 'src/composables/useAxios'

const files = ref([])
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

export { files, avExt, filesCol, simpleFilesCol }
