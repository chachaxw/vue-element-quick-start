<template>
  <div id="app">
    <NavMenu></NavMenu>
    <Container></Container>
    <Loading :show="true"></Loading>
  </div>
</template>

<script>
import './components/common/style.scss';
import NavMenu from './components/common/NavMenu.vue';
import Container from './components/common/Container.vue';

export default {
  components: {
    NavMenu, Container,
  },
};
</script>
