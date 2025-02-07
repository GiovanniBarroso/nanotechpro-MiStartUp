import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Contact from '../views/Contact.vue';
import Products from '../views/Products.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/contact', component: Contact },
    { path: '/products', component: Products },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
