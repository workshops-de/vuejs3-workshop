import { createStore } from 'vuex';

export default createStore({
  state: {
    books: []
  },
  mutations: {
    UPDATE_BOOKS(state, payload) {
      state.books = payload.books;
    }
  },
  actions: {
    SET_BOOKS({ commit }, payload) {
      commit('UPDATE_BOOKS', payload);
    }
  },
  strict: process.env.NODE_ENV !== 'production'
});
