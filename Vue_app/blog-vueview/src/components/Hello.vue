<!-- 首页欢迎部分 -->
<template>
  <div class="Hello">
      <h1>{{welcome}}</h1>
      <p>{{slogan}}</p>
  </div>

</template>

<script>
import Card from './Card.vue';
export default {
   name:'Hello' ,
  data() {
      return {
          welcome: "你好，欢迎访问本博客!",
          slogan: "海内存知己，天涯若比邻！"
      };
    },
    methods: {

      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    position: relative;
    top: 10px;
    text-align:center;
    bottom: 40px;
     background:linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
            -webkit-background-clip: text;
            color: transparent;
}
p{
    position: relative;
    text-align: center;
    color: rgb(255, 255, 255);
    top: 25px;
}


</style>
