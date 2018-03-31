<template lang="pug">
  #header
    img(src={logo} alt="")
</template>

<script>
import wBooksImage from '../../assets/ASSETS/wbooks_logo.svg';

export default {
  name: 'Header',
  data() {
    return ({
      logo: wBooksImage
    });
  }
};
</script>
