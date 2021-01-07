<template>
  <table>
    <BookListItem
      v-for="(book, index) in books"
      :key="book.isbn"
      v-bind="book"
      @read="readBook(index)"
    />
  </table>
</template>

<script>
import { defineComponent } from 'vue';
import BookListItem from '@/components/BookListItem.vue';

export default defineComponent({
  name: 'BookList',
  components: {
    BookListItem
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    readBook(index) {
      this.books[index] = {
        ...this.books[index],
        read: true
      };
    },
    async updateBooks() {
      const response = await fetch('http://localhost:4730/books');
      this.books = await response.json();
      this.$store.dispatch('SET_BOOKS', {
        books: this.books
      });
    }
  },
  created() {
    this.updateBooks();
  }
});
</script>

<style lang="scss">
table {
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
}
</style>
