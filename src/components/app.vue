<template>
  <div class="wrap">
    <!--内容区-->

    <!--头部-->
    <div class="head" v-show="isShow">
      <!--1 下载APP-->
      <div class="downloadApp">
      <span class="close">
         <img src="../images/index/closebtn_03.png" />
      </span>
        <div class="picture">
          <a href="">
            <img src="../images/index/211547bb51dd23758f74fb86e9d7aae5.png" />
          </a>
        </div>
      </div>
      <!--2 头部内容-->
      <myHeader ></myHeader>
    </div>


    <!-- 内容部分-->
    <div id="myBody">
        <router-view> </router-view>
    </div>

    <!--底部-->
    <myFooter :change-head-is-show="changeHeadIsShow"/>


  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import myHeader from "./header/header.vue"
  import myFooter from "./footer/footer.vue"

  export default {
    data(){
      return{
        isShow:true
      }
    },
    methods:{
        changeHeadIsShow(isShow){
          this.isShow = isShow
        }
    },
    components: {
      myHeader,
      myFooter
    },
    created(){


    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
html,body
  /*禁止滚动条*/
  width 100%
  height: 100%
  overflow hidden
  .wrap
    overflow hidden
    width 100%
    height: 100%
    /*头部*/
  .head
    position relative
    z-index: 100
    height 154px
    width 100%
    background-color: white;
    .downloadApp
      position relative
      z-index 100
      .close
        position absolute
        top 25%
        left 2%
        img
          width 19px
          height 19px

      .picture
        img
          height: 55px


    #myBody
      height 100%
</style>
