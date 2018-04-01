<template lang="pug">
  #layout
    Header
    router-view
</template>

<script>
import Header from '../Header/Header';

export default {
  name: 'Layout',
  components: {
    Header
  }
};
</script>
