// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      { 
        path: "/shirt",
        name: "Shirt",
        component: () => import('@/views/Shirt.vue'),
      },
      {
        path: "/hood",
        name: "Hood",
        component: () => import('@/views/Hood.vue'),
      },
      {
        path:"/fleece",
        name: "Fleece",
        component: () => import('@/views/Fleece.vue'),
      },
      {
        path:"/login",
        name:"Login",
        component: () => import('@/views/Login.vue'),
      },
      {
        path:"/createaccount",
        name: "CreateAccount",
        component: () => import('@/views/CreateAccount.vue'),
      },
      {
        path: "/jeans",
        name:"Jeans",
        component: () => import('@/views/Jeans.vue'),
      },
      {
        path: "/basket",
        name: "Basket",
        component: () => import('@/views/Basket.vue'),
      },
      {
        path: "/amazon",
        name: "Amazon",
        component: () => import('@/views/Amazon.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
