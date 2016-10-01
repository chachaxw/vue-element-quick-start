<template>
  <div id="app">
    <TopBar></TopBar>
    <el-row type="flex">
      <NavMenu></NavMenu>
      <Container></Container>
    </el-row>
  </div>
</template>

<script>
import 'components/common/style.scss';
import TopBar from 'components/common/TopBar';
import NavMenu from 'components/common/NavMenu';
import Container from 'components/common/Container';

export default {
  components: {
    TopBar, NavMenu, Container,
  },
};
</script>
