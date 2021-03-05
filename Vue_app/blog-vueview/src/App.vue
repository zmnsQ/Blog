<!-- Vue首页入口 -->
<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Home from "./pages/Home";
import Article from "./pages/Article";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Footer from "./components/Footer.vue";

export default {
  name:'App',
  components:{
    Hello,
    'Home':Home,
    'Header':Header,
    'Article':Article,
  },
  data(){
    return{
      page : 1
    }
  }

}
</script>

<style>
body{
background-image: url("https://up.enterdesk.com/edpic_source/7c/cb/b8/7ccbb87d1a0848dafd952b2343a4da9c.jpg");
background-attachment:fixed;background-position:center;
background-size: cover;
font-family: 'Noto Sans SC', sans-serif;
};
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100&display=swap');
</style>
