<template>
  <div id="container">
    <TopBar></TopBar>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopBar from '@/components/common/TopBar.vue';

@Component({
  components: {
    TopBar,
  },
})
export default class Container extends Vue {}
</script>
