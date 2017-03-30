<template lang="html">
  <div class="page">
    <h1 v-text="hello"></h1>
    <div class="vuex-example">
      <h2>Vuex2 Example</h2>
      <button  @click="decrement">-</button>
      <span v-text="count"></span>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        hello: 'Hello World',
        count: 0,
      };
    },
    computed: {
      ...mapGetters({
        countNum: 'count',
      }),
    },
    methods: {
      ...mapActions({
        increment: 'increment',
        decrement: 'decrement',
      }),
    },
    watch: {
      countNum(val) {
        this.count = val;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .page {
    h1 {
      text-align: center;
      color: #ff0000;
    }
    .vuex-example {
      margin: 200px auto;
      text-align: center;
      font-size: 16px;
      color: #fff;
      span {
        display: inline-block;
        margin-left: 20px;
        margin-right: 20px;
      }
      button {
        border: none;
        width: 40px;
        height: 40px;
        outline: none;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
</style>
