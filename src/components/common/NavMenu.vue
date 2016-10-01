<template lang="html">
  <el-menu default-active="2" class="nav-menu" theme="dark">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-menu"></i>导航一</template>
      <el-menu-item index="1-1">二级导航一</el-menu-item>
      <el-menu-item index="1-2">二级导航二</el-menu-item>
      <el-menu-item index="1-3">二级导航三</el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
  </el-menu>
</template>

<style lang="sass">
  @import "./style.scss";
</style>
