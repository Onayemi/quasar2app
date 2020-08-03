const routes = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'test', component: () => import('pages/about.vue') }
    ]
  },
  {
    path: '/admin/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/Dashboard.vue'), meta: { requiresAuth: true } },
      { path: 'solution', component: () => import('pages/solution.vue'), meta: { requiresAuth: true } },
      { path: 'about', component: () => import('pages/about.vue'), meta: { requiresAuth: true } },
      { path: 'reset', component: () => import('pages/Reset.vue'), meta: { requiresAuth: true } }
    ]
    // meta: { requiresAuth: true }
  },
  {
    path: '/dashboard',
    component: () => import('layouts/ExtraLayout.vue'),
    children: [
      // { path: 'solution2', component: () => import('pages/Solution.vue'), meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') },
      { path: 'reset', component: () => import('pages/Reset.vue') }
    ]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
