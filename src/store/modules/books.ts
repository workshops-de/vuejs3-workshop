import { getBooks } from '@/api/books';

export default {
  namespaced: true,
  state: {
    books: []
  },
  mutations: {
    UPDATE_BOOKS(state: any, books: any) {
      state.books = books;
    }
  },
  actions: {
    SET_BOOKS({ commit }: any, books: any) {
      commit('UPDATE_BOOKS', books);
    },
    async GET_BOOKS({ commit }: any) {
      const books = await getBooks();
      commit('UPDATE_BOOKS', books);
    }
  }
};
