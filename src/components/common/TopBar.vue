<template>
  <el-row class="top-bar" type="flex">
    <div class="logo">
      <router-link to="/"><img src="../../assets/images/logo.svg" alt="logo" /></router-link>
    </div>
    <div class="top-wrapper">
      <div class="user-area pull-right">
        <div class="user-avatar">
          <span class="avatar-img"></span>
          <i class="el-icon-arrow-down"></i>
          <div class="drop-menu">
            <ul>
              <li><i class="iconfont">&#xe603;</i>管理员</li>
              <li><i class="iconfont">&#xe602;</i>退出</li>
            </ul>
          </div>
        </div>
      </div>
      <el-col :span="8" class="search-area pull-right">
        <el-form>
          <el-form-item>
            <i class="el-icon-search"></i>
            <el-input placeholder="搜索"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
  </el-row>
</template>
