<template lang="pug">
  #dashboard
    Header
    .books-container
      Book(v-for="book in books" v-bind:key="book.id" v-bind:book="book")
</template>

<script>
import Books from '../../services/books';
import Header from '../Header/Header';
import Book from './components/Book/Book';

export default {
  name: 'dashboard',
  data() {
    return {
      books: Books
    };
  },
  components: {
    Header,
    Book
  }
};
</script>


<style lang="sass" scoped>
  .books-container
    display: flex;
    max-width: 100vw;
    flex-wrap: wrap;
    padding: 0 10%;
    box-sizing: border-box;
</style>
