<template>
  <div id="container">
    <TopBar></TopBar>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
import TopBar from './TopBar.vue';

export default {
  components: {
    TopBar,
  },
};

</script>
