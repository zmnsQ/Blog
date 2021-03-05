<template>
<!-- 首页头部菜单栏 -->
  <div class="Headbox">
      <el-menu :default-active="activeIndex" class="el-menu-header" mode="horizontal" @select="handleSelect" background-color=rgba(240,108,123) text-color="#fff" active-text-color="#409EFF">
      <el-menu-item index="1">首页</el-menu-item>
       <el-submenu index="2">
          <template slot="title">分类</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
       <el-menu-item index="3">首页</el-menu-item>
       <div class="searchbox">
       <el-input placeholder="请输入文章名或关键字" v-model="input_search">
         <el-button slot="append" icon="el-icon-search"></el-button>
       </el-input>
       </div>
       <div class="loginbox">
         <el-button class="login-button" type="info">登陆</el-button>
       </div>
       </el-menu>
  </div>

</template>

<script>
export default {
  name:'Header',
  data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbox{
  position: absolute;
  right: 80px;
  width: 300px;
  padding: 9px;
}
.loginbox{
  position: absolute;
  right: 0;
  padding: 9px;
}
.login-button{
  background-color: rgba(255,255,255,0.4);
  border: white;
}
</style>
