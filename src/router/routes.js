const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta: { transition: 'slide-left' } },
      { path: '/login', component: () => import('pages/Login.vue'), meta: { transition: 'slide-left', vorsicht: true } },
      { path: 'register', component: () => import('pages/Register.vue'), meta: { transition: 'slide-left' } },
      { path: 'notifications', component: () => import('pages/Notifications.vue'), meta: { transition: 'slide-left' } },
      { path: '/dashboard', component: () => import('src/pages/dashboard/Index.vue'), meta: { requiresAuth: true }},
      { path: '/categories/:routename', component: () => import('src/pages/categories/index.vue'),meta: { transition: 'slide-left' } },
      { path: '/categories/subcategory/', component: () => import('src/pages/categories/subcategory/index.vue'),meta: { transition: 'slide-left' } },
      { path: '/manage', component: () => import('src/pages/dashboard/Manage.vue'), meta: { requiresAuth: true, elevatedAccess: true }},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes