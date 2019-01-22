<template>
  <div id="app">
    <NavMenu></NavMenu>
    <Container></Container>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import './components/common/style.scss';
import NavMenu from './components/common/NavMenu.vue';
import Container from './components/common/Container.vue';

@Component({
  components: {
    NavMenu,
    Container,
  },
})
export default class App extends Vue {}
</script>
