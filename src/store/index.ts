import { createStore } from 'vuex';
import books from '@/store/modules/books';

export default createStore({
  modules: {
    books
  },
  strict: process.env.NODE_ENV !== 'production'
});
