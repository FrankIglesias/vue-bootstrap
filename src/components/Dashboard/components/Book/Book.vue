<template lang="pug">
  .container
    router-link( :to="`books/${book.id}`").image-container
      img(v-if="!book.image_url" src="../../../../assets/ASSETS/default_book.svg")
      img.book-image(v-if="book.image_url" :src="book.image_url")
    p.book-description.strong
      | {{book.title}}
    p.book-description
      | {{book.author}}
</template>

<script>
export default {
  name: 'Book',
  props: ['book']
};
</script>

<style lang="sass" scoped>
  .container
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px 0;
    width: 150px;

  .image-container
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    background: gray;
    overflow: hidden;

  .strong
    font-weight: bold;

  .book-description
    font-size: 14px;
    font-weight: light;
    margin: 5px 0;

  .book-image
    width: 100%;
</style>
