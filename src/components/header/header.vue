<template>
  <div class="header">
    <div class="top">
      <!--左侧-->
      <div class="left">
        <span>猫站</span>
          <span>|</span>
          <router-link to="/place" @click="test">
            上海
            <i></i>
          </router-link>
      </div>
      <!--中间-->
      <p class="center">
        <a href="###">
          <input type="text" placeholder="搜索商品和品牌" /><!--
            --><span></span>
        </a>
      </p>
      <!--右侧-->
      <a class="right" href="">
        <img src="../../images/index/mydope.png" alt="">
      </a>
    </div>
    <!--下半部分-->
    <div class="bottom" id="bottom">
      <ul><!-- @click="changeComponent"-->
        <li>
          <router-link to="/firstPage/shouye">首页</router-link>
        </li>
        <li>
          <router-link  to="/firstPage/maoliang">猫粮</router-link>
        </li>
        <li>
          <router-link to="/firstPage/temai">特卖</router-link>
        </li>
        <li>
          <router-link to="/firstPage/guantouchaoshi">罐头超市</router-link>
        </li>
        <li>
          <router-link to="/firstPage/chaopinshipin">潮品视频</router-link>
        </li>
        <li>
          <router-link to="/firstPage/xinmiaoketang">新喵课堂</router-link>
        </li>
      </ul>
    </div>


  </div>
</template>
<script>
  import BScroll from 'better-scroll'
    export default {
        created(){
          this.$nextTick(()=>{
            new BScroll(document.getElementById('bottom'),{
              scrollX: 'true',
              click:"true"
            })
          })
        },
      methods:{
        test(){
         /* window.location.href="place.html"*/
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
  background-color: white;
  padding-top: 8px
  padding-bottom: 8px
  width 100%
  position absolute
  z-index 100
  .top
    width 100%
    padding: 5px 10px
    height: 43px
    display flex
    .left
      i
        display inline-block
        background url("../../images/index/index_icon_comment_sanjiao_爱奇艺.png") no-repeat center
        width 20px
        height: 8px
        background-size 10px 10px
    .center
      width 60%
      a
        display inline-block
        height: 27px
        width 100%
      input
        width 100%
        height: 25px
        background-color #F6F6F6
        border none
        float left
      span
        float left
        width 25px
        height: 25px
        margin-left: -25px
        background-size  11px 11px
        background-image: url("../../images/index/search.png")
        background-repeat no-repeat
        background-position: center;
        background-color #F6F6F6

    .right
      display inline-block
      width 25px
      height: 25px
      img
        display inline-block
        width 25px
        height: 25px
        margin-left: 10px

  .bottom
    width 100%
    ul
      width 450px
      height 36px
      white-space nowrap
      li
        float left
        width 74.5px
        height 36px
        line-height 36px
        text-align: center
        a
          text-decoration none
          color #666
</style>
