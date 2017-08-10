<template>
    <div>
      <div class="lijtz-header">
        <div class="top">
          <i class="iconfont icon-xiangzuo"> </i>
          <span>注册</span>
        </div>
        <div class="icon">
          <img src="./images/logo.png" alt="">
        </div>
      </div>

      <div class="register">

        <mt-navbar v-model="selected">
          <mt-tab-item id="1">普通登录</mt-tab-item>
          <mt-tab-item id="2">手机登录密码登录</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <form action="#">
              <!--<div  class="top">
                <span></span>
                <input type="text" />

              </div>-->
            </form>


          </mt-tab-container-item>
          <mt-tab-container-item id="2">
           455
          </mt-tab-container-item>

        </mt-tab-container>


      </div>


      <div class="hezuo"></div>
    </div>
</template>
<script>
    import Vue from "vue"
    import { Navbar, TabItem ,TabContainer, TabContainerItem,Field} from 'mint-ui';

    Vue.component(Field.name, Field);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);
    export default {
        data(){
            return{
              selected:true,
              a:true
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.lijtz-header
  width 100%
  height 178px
  background url("./images/9c1b1803b028094093a95a484fbaa511.png") no-repeat center

  .top
    color white
    font-size 18px
    i
      margin-left 10px
    span
      float: right
      margin-right:10px


  .icon
    text-align center
    margin-top 30px
    img
      width 75px


</style>
