<template>
  <div>
      <router-view></router-view>
    <div class="footer_nav">
        <router-link to="/home_page">
          发现音乐
        </router-link>
        <router-link to="/mymusic">
          我的音乐
        </router-link>
        <router-link to="/home">
          朋友
        </router-link>
        <router-link to="/home">
          好友
        </router-link>
    </div>
  </div>
</template>

<script>
  import Head_page from "./homePage/HomePage.vue"
export default {
  name: 'HelloWorld',
  components:{
    Head_page,
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer_nav{
    background: midnightblue;
    color: aliceblue;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 80px;
    line-height: 80px;
    position: fixed;
    bottom: 0px;
  }
  .footer_nav>a{
    display: inline-block;
    text-align: center;
    text-decoration:none;
    width: 25%;
    color: aliceblue;
  }
</style>