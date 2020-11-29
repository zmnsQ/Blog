<template>
  <div class="Header">
      <div class="HeadBack">
          <el-row class="container">
              <el-col :span="24">
                <div class="Headbox">
                  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                  <el-menu-item index="1">首页</el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">管理</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="2-4-1">选项1</el-menu-item>
                      <el-menu-item index="2-4-2">选项2</el-menu-item>
                      <el-menu-item index="2-4-3">选项3</el-menu-item>
                     </el-submenu>
                   </el-submenu>
                  <el-menu-item index="3">首页</el-menu-item>
                  </el-menu>
                </div>
                </el-col>
            </el-row>
      </div>
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

.HeadBack{
  width: 100%;
  background: rgba(40, 45, 42, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
}

</style>
