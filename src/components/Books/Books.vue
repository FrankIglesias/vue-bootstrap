<template lang="pug">
  .container
    a.go-back
      | < Volver
    .book-detail-container
      img.book-image( :src="book.image_url" alt="")
      .description-container
        h1
          | {{book.title}}
        h2
          | {{book.author}}
        p
          | {{book.year}}
</template>

<script>
import Books from '../../services/books';

export default {
  name: 'Book',
  data() {
    const book = Books.find(b => b.id === Number(this.$route.params.id));
    return {
      book
    };
  }
};
</script>

<style lang="sass" scoped>
  .container
    display: flex;
    flex-direction: column;
    padding: 30px 10px 0;

  .go-back
    align-self: flex-start;

  .book-image
    width: 200px;
    margin-right: 10px;

  .book-detail-container
    display: flex;
    align-self: center;

</style>
