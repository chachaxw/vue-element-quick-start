<template>
  <el-row class="top-bar">
    <div class="top-wrapper">
      <div class="user-area pull-right">
        <div class="user-avatar">
          <span class="avatar-img" :style="{ backgroundImage: 'url(' + avatar_url + ')' }"></span>
          <i class="el-icon-arrow-down"></i>
          <div class="drop-menu">
            <ul>
              <li><i class="iconfont">&#xe603;</i>管理员</li>
              <li @click="signOut"><i class="iconfont">&#xe602;</i>退出</li>
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

<script type="text/javascript">
  export default {
    data() {
      return {
        avatar_url: 'http://img0.imgtn.bdimg.com/it/u=1787407765,2524017231&fm=11&gp=0.jpg',
      };
    },
    methods: {
      signOut() {
        console.log('退出登录');
      },
    },
  };
</script>
