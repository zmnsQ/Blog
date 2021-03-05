<template>
  <div>
    <Head></Head>
    <Hello></Hello>
      <div class='home-container'>
          <el-card class="blog-main">
            <img class="logobox" src="../img/logo.png" />
            <a class="CopyRight" href="https://space.bilibili.com/74614876" style="text-decoration: none;">CopyRight © 2021 肿么能死</a>
            <div class="Socialbox">
              <a title="向博主发起QQ会话" :href="qq_link">
                <svg t="1614324179982" class="icon-qq" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11282"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0z" fill="#1E9CF0" p-id="11283"></path><path d="M326.988 457.489c-2.675 7.064 1.243 11.537 0 38.438-0.336 7.237-31.537 39.988-43.919 74.005-12.284 33.743-13.974 68.997 4.992 82.853 18.963 13.853 36.617-46.118 38.927-37.394a127.703 127.703 0 0 0 3.772 11.837c6.069 16.346 16.261 34.438 31.035 51.355 3.002 3.436-18.278 9.755-31.035 31.456-12.757 21.697 3.654 61.15 67.094 61.15 81.848 0 100.143-28.774 101.81-28.65 6.095 0.46 6.516 0 12.976 0 7.906 0 4.633 0.636 11.977 0 3.967-0.343 43.747 34.441 98.815 28.65 93.826-9.863 79.48-41.306 72.113-61.15-7.684-20.715-34.865-30.418-33.665-31.746 22.477-24.839 26.036-40.089 33.665-62.902 3.139-9.377 24.911 51.597 41.678 37.394 6.985-5.919 20.96-30.578 6.985-82.853-13.974-52.279-40.993-64.2-40.405-74.005 1.224-20.402 0.512-34.728-0.519-38.438-4.989-17.971-15.423-14.004-15.423-17.971 0-103.477-77.812-187.358-173.798-187.358-95.989 0-173.798 83.881-173.798 187.358-0.001 8.212-7.29 2.144-13.277 17.971z" fill="#ffffff" p-id="11284" data-spm-anchor-id="a313x.7781069.0.i32" class="selected"></path></svg></a>
              <a title="向博主发送邮件" :href="'Mailto:'+blog_email">
                <svg t="1614308795517" class="icon-mail" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9156"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#1296db" p-id="9157" data-spm-anchor-id="a313x.7781069.0.i15" class="selected"></path><path d="M318.72 330.538667h369.024c25.173333 0 45.781333 20.138667 46.122667 44.8l-230.570667 126.506666L272.810667 375.466667A45.653333 45.653333 0 0 1 318.72 330.538667zM272.810667 423.893333l-0.213334 223.786667c0 24.917333 20.736 45.269333 46.122667 45.269333h369.024c25.386667 0 46.122667-20.352 46.122667-45.269333V423.808l-225.109334 120.618667a11.562667 11.562667 0 0 1-11.050666 0L272.810667 423.893333z" fill="#ffffff" p-id="9158" data-spm-anchor-id="a313x.7781069.0.i14" class="selected"></path>
              </svg></a>
            </div>
            <div class="Socialbox-2"><i style="top:20%;position:relative;color: #FFFFFF;">{{UserName}}</i></div>
          </el-card>
          <div class="Card-container">
            <Card></Card>
          </div>

      </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hello from '../components/Hello'
import Card from '../components/Card'
export default {
    name:'Home',
    data() {
      return {
        qq_link:'http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes',
        blog_email:'402887431@qq.com',
        UserName:'肿么能死'
      }
    },
    methods: {

    },
    components:{
      "Head":Header,
      "Footer":Footer,
      "Hello":Hello,
      "Card":Card
    },
    created() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Header{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}

.el-main {
    background-color: #ffffff;
    color: #333;
    line-height: 160px;
    border-radius: 50px;
    top: 300px;
    position: absolute;
    width: 95%;
    left: 2.5%;
    right: 2.5%;
  }

body > .el-container {
    margin-bottom: 40px;
  }
.home-container{
  position: absolute;
  left: 5%;
  right: 5%;
  top: 250px;
}
.blog-main{
  position: relative;
  height: 400px;
  width: 300px;
  border-radius: 25px;
  background-color: #FFFFFF
}

.logobox{
  border-radius: 50%;
  position: relative;
  height: 40%;
  width: 40%;
  left: 30%;
  box-shadow: 0px 2px 12px #A9A9A9
}
.CopyRight{
  color: rgb(226,77,69);
  position: absolute;
  top:90%;
  left: 17%
}
.Socialbox{
  position: absolute;
  top: 45%;
  left: 20%;
  border-radius:10px ;
  height: 40px;
  width: 60%;
  background-color: rgba(240,108,123);
  box-shadow: 0 2px 12px #ff4e6a;
}
.Socialbox-2{
  position: absolute;
  top: 65%;
  left: 20%;
  border-radius:10px ;
  height: 40px;
  width: 60%;
  background-color: rgba(240,108,123);
  text-align: center;
  box-shadow: 0 2px 12px #ff4e6a;
}
.Header{
  z-index: 10;
}
.icon-qq{
  z-index: 2;
  width: 29px;
  position: absolute;
  top:6px;
  left: 20%;
  margin: auto;
}
.icon-mail{
  width: 25px;
  position: absolute;
  top:8px;
  right: 20%;
  margin: auto;
}
.Card-container{
  position: absolute;
  left: 350px;
  top: 0;
  right: 0;
}
</style>
