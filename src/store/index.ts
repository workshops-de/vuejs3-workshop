import { createStore } from 'vuex';

export default createStore({
  state: {
    books: []
  },
  strict: process.env.NODE_ENV !== 'production'
});
