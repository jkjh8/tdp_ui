import MainLayout from '../layouts/MainLayout.vue'
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/playlist',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/PlaylistPage.vue') }]
  },
  {
    path: '/files',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/FilesPage.vue') }]
  },
  {
    path: '/setup',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/SetupPage.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
