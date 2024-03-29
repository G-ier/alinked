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
      { path: '/exp', component: () => import('src/pages/Exp.vue')},
      { path: '/maps', component: () => import('src/pages/MapsImp.vue')},
      { path: '/directmsg', component: () => import('src/pages/directmsg/DM.vue'), meta: {requiresAuth: true}},
      { path: '/directmsg/chat', component: () => import('src/pages/directmsg/Chat.vue'), meta: {requiresAuth: true}}
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