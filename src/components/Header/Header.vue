<template lang="pug">
  .header-container
    img.logo(src="../../assets/ASSETS/wbooks_logo.svg" alt="")
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="sass" scoped>
  .header-container
    display: flex;
    width: 100vw;
    align-items: center;
    height: 100px;
    position: fixed;
    top: 0;
    border-bottom: 1px solid gray;
    background: white;
    padding: 0 10px;

  .logo
    height: 50px;
</style>
