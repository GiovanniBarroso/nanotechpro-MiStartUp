import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/login", component: () => import("@/views/Login.vue") },
  { path: "/contact", component: () => import("@/views/Contact.vue") },
  { path: "/products", component: () => import("@/views/Products.vue") },
  { path: "/product/:id", component: () => import("@/views/ProductDetails.vue"), props: true }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
