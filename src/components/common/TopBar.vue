<template>
  <el-row class="top-bar" type="flex">
    <div class="logo">
      <a href="/"><img src="../../assets/images/logo.svg" alt="logo" /></a>
    </div>
    <el-col :span="8" :push="11">
      <el-col :span="18" class="top-control">
        <el-form>
          <el-form-item>
            <i class="el-icon-search"></i>
            <el-input placeholder="搜索"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6" class="top-control">
        <div class="user-avatar">
          <span class="avatar-img"></span>
          <i class="el-icon-arrow-down"></i>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>
