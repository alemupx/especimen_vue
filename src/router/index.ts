import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [    

    {
      path: "/:pathMatch(.*)*",      
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },

    {
      path: "/about",      
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/admin/LoginView.vue"),
    },
  ],
});

export default router;
