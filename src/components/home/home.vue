<template lang="html">
  <div class="home">
    <h1>这是首页</h1>
    <img src="../../assets/images/home.jpg" width="100%" />
    <p>
      这是一个vue2 quick start 脚手架项目，
      你可以clone该项目并迅速上手开发。
      该项目主要用到了饿了么前端UI组件——Element-ui，
      数据状态管理工具Vuex，页面路由工具vue-router2，
      如果有任何疑问，都可以通过GitHub提交issue方式给我，
      我会即使处理你所遇到的问题。
    </p>
  </div>
</template>
<style lang="scss" scoped>
  .home {
    text-align: center;
    width: 100%;
    img {
      max-width: 600px;
      margin: 0 auto;
    }
    p {
      max-width: 500px;
      margin: 40px auto;
      line-height: 1.7;
    }
  }
</style>
