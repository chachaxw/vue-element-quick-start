<template lang="html">
  <div class="page">
    <h1 v-text="hello"></h1>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        hello: 'Hello World',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .page {
    h1 {
      text-align: center;
      color: #ff0000;
    }
  }
</style>
