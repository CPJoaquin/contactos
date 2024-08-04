import { createRouter, createWebHistory } from 'vue-router';
import ContactView from '../views/ContactView.vue';

const routes = [
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;