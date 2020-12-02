
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') },
    ]
  },
  {
    path: '/service',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/service/Index.vue') },
      { path: 'add', component: () => import('pages/service/Add.vue') },
      { path: 'single', component: () => import('pages/service/single.vue') },
      { path: 'quote', component: () => import('pages/service/cost_calc.vue') },
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserDash.vue'),
    children: [
      { path: '', component: () => import('pages/user/Dashboard.vue') },
      { path: 'dashboard', component: () => import('pages/user/Dashboard.vue') },
      { path: 'services', component: () => import('pages/user/Services.vue') },
      { path: 'booking_list', component: () => import('pages/user/BookingList.vue') },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
