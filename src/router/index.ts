import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import About from '@/views/About.vue';
const Books = () => import(/* webpackChunkName: "books" */ '@/views/Books.vue');
const BookList = () => import(/* webpackChunkName: "books" */ '@/views/BookList.vue');
const BookDetail = () => import(/* webpackChunkName: "books" */ '@/views/BookDetail.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/books'
  },
  {
    path: '/books',
    component: Books,
    children: [
      {
        path: '',
        name: 'Books',
        component: BookList
      },
      {
        path: ':isbn',
        name: 'BookDetail',
        component: BookDetail
      }
    ]
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
