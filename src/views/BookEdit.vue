<template>
  <form>
    <input type="text" v-model.lazy.trim="book.title" name="title" />
  </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookEdit',
  data() {
    return {
      book: {},
      isbn: null
    };
  },
  methods: {
    async getBook() {
      const response = await fetch(`http://localhost:4730/books/${this.isbn}`);
      this.book = await response.json();
    },
    init(isbn) {
      this.isbn = isbn;
      this.getBook();
    }
  },
  created() {
    this.init(this.$route.params.isbn);
  },
  beforeRouteUpdate(to) {
    this.init(to.params.isbn);
  }
});
</script>
