<template>
  <div id="app">
    <TopBar></TopBar>
    <el-row type="flex">
      <NavMenu></NavMenu>
      <Content></Content>
    </el-row>
  </div>
</template>

<script>
import TopBar from 'components/common/TopBar';
import NavMenu from 'components/common/NavMenu';
import Content from 'components/common/Content';

export default {
  components: {
    TopBar, NavMenu, Content,
  },
};
</script>
