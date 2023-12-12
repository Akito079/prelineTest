import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('../views/Home.vue'),
     
    },
    {
      path: "/dashboard",
      name : 'dashboard',
      component : () => import('../views/Dashboard.vue'),
     
    },
    {
      path : '/login',
      name : 'login',
      component : () => import('../views/Login.vue'),
      meta : { requiresAuth : false },      
    },
    {
      path : '/register',
      name : 'register',
      component : ()=>import('../views/Register.vue'),
      
    }
  ]
})
router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      HSStaticMethods.autoInit();
    }, 100)
  }
});
export default router
