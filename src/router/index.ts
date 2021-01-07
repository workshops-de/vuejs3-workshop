import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BookList from '@/views/BookList.vue';
import NotFound from '@/views/NotFound.vue';
import About from '@/views/About.vue';
import BookDetail from '@/views/BookDetail.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/books'
  },
  {
    path: '/books',
    name: 'Books',
    component: BookList
  },
  {
    path: '/books/:isbn',
    name: 'BookDetail',
    component: BookDetail
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
