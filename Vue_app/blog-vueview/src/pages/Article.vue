<template>
  <div>
    <Header></Header>
    <div class="article-container">
      <h1 class="title"># {{title}}</h1>
      <div class="tag-container">
        <span class="arctime">
          <i class="el-icon-date">  {{time}}</i>
        </span>
        <span class="tag">
          <i class="el-icon-collection-tag">   {{type}}</i>
        </span>
      </div>
      <div class="md-container">
        <mavon-editor class="md" :value="mdData"
                      :subfield="false"
                      :defaultOpen="'preview'"
                      :toolbarsFlag="false"
                      :editable="false"/>
      </div>
      <el-card class="socialCard"></el-card>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
  export default{
    name:"Article",
    components:{
      Header
    },
    data(){
      return {
        title:"None",
        time:"2021年2月28日",
        type:"aaa",
        mdData:"###sss",
    }
    }
  }
  // mounted(){
  //   axios.get('/api/getArcticle'+this.$route.Arcname).then(respose => {
  //   this.arcname = response.data.arcname
  // })
  // }
  // function getArc(this.arcname){

  // }
</script>

<style scoped>
  .article-container{
    border-radius: 15px;
    position: absolute;
    min-height: 700px;
    background-color: rgba(255,255,255,0.4);
    z-index: 1;
    right: 5%;
    left: 5%;
    top:120px
  }
  .title{
    position: relative;
    color: rgb(220,177,240);
    text-shadow: #908e91;
    left: 20px;
  }
  .tag-container{
    height: 20px;
    right: 60px;
    text-align: right;
    position: relative;
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
    text-align: left;
  }
  .tag{
    position: relative;
    background-color: rgb(200, 160, 106);
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
    width: 75px;
    text-align: left;
  }
  .md-container{
    position: relative;
    top: 20px;
    width: auto;
    border-radius: 15px;
    width: 90%;
    left: 5%;
    background-color: #FFFFFF;
  }
  .socialCard{
    position: relative;
    width: 90%;
    left: 5%;
    top: 40px;
    border-radius: 15px;
    text-align: center;
    height: 200px;
    background-color: rgba(255, 255,255, 0.5);
    border-color: rgba(0,0,0,0);
    box-shadow: 0 2px 12px 0 rgba(246, 167, 176, 0.1);
  }
  .md{
    width: 96%;
    left: 2%;
  }
</style>
