<!-- 首页文章简介卡片 -->
<template>
  <div>
        <el-card class="ArcCard" shadow="hover">
        <a :href="'/arcticle/'+arcsrc">
          <div class="img-container">
            <img :src="imgsrc" />
            <h1 class="arc-title">{{arcname}}</h1>
            <div class="tag-container">
              <span class="arctime">
                <i class="el-icon-date">  {{arctime}}</i>
              </span>
              <span class="tag">
                <i class="el-icon-collection-tag">  {{arctime}}</i>
              </span>
            </div>
          </div>
        </a>
        <article class="Summary">{{summary}}</article>
        </el-card>
</div>

</template>

<script>
export default {
   name:'Card' ,
  data() {
      return {
        arcsrc: "1",
        imgsrc: "http://120.78.163.86/upload/2020/05/%E7%B3%BB%E7%BB%9F%202020-05-11%2021_36_36%20(2)-93971b28b5c1439aab081946649fe1d9.png",
        arcname: "测试文章",
        arctime: "2021年2月26日",
        summary: "这是一段测试文章aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa,sdsadas撒金达还是看不到卡上不得撒家豪多快好省肯德基撒娇好吧"
      };
    },
    methods: {

      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ArcCard{
    border-radius: 15px;
    height: 300px;
  }
  .img-container{
    position: relative;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 100px;
  }
  .arc-title{
    position: absolute;
    top: 70px;
    left: 0px;
    right: 20px;
    font-size: 30px;
    bottom: 0px;
    color: rgb(255, 255, 255);
    padding-bottom: 40px;
    padding-left: 19px;
    padding-right: 0px;
    padding-top: 15px;
    text-transform: none;
    width: 660px;
    z-index: 1;
    border-radius: 15px;
    background-image: linear-gradient(to top, #908e91 0%, rgba(0,0,0,0) 70%);
  }
  .arctime{
    position: relative;
    background-color: rgb(255, 78, 106);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-block;
    font-family: Roboto, Noto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    height: 26px;
    line-height: 16.100000381469727px;
    margin-bottom: 5px;
    margin-right: 3px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    width: 143.890625px;
  }
  .tag-container{
    top:7px;
    position: relative;
  }
  .Summary{
    position: relative;
    top: 76px;
    left: 0;
    width: 660px;
    font-family: "microsoft yahei";
  }


</style>
