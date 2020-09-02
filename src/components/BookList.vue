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

const BOOKS = [
  {
    title: 'Design Patterns',
    isbn: '978-0-20163-361-0'
  },
  {
    title: 'REST und HTTP',
    isbn: '978-3-86490-120-1'
  },
  {
    title: 'Eloquent JavaScript',
    isbn: '978-1-59327-584-6'
  }
];

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
    }
  },
  created() {
    this.books = BOOKS;
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
