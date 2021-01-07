import { createStore } from 'vuex';

import { getBooks } from '../api/books';

export default createStore({
  state: {
    books: []
  },
  mutations: {
    UPDATE_BOOKS(state, books) {
      state.books = books;
    }
  },
  actions: {
    SET_BOOKS({ commit }, books) {
      commit('UPDATE_BOOKS', books);
    },
    async GET_BOOKS({ commit }) {
      const books = await getBooks();
      commit('UPDATE_BOOKS', books);
    }
  },
  strict: process.env.NODE_ENV !== 'production'
});
