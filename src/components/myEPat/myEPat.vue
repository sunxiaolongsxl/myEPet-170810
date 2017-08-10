<template>
    <div class="myPET">
      <div class="myEPat-header">
        <span class="iconfont icon-xiangzuo" > </span>
        <span >提示信息</span>
        <span class="iconfont icon-all"> </span>
       <!-- <div class="footer">
          <ul>
            <li class="firstPage" @click="changeHeadIsShow(true)">
              <router-link to="/firstPage">
                <img src="../../images/footer/main_tab_1_sel.png" />
              </router-link>
            </li>
            <li class="selectClass"  @click="changeHeadIsShow(false)">
              <router-link to="/selectClass">
                <img src="../../images/footer/main_tab_2.png" />
              </router-link>
            </li>
            <li class="shopCar"  @click="changeHeadIsShow(false)">
              <router-link to="/shopCar">
                <img src="../../images/footer/main_tab_3.png" />
              </router-link>
            </li>
            <li class="myEPat" @click="changeHeadIsShow(false)">
              <router-link to="/myEPat">
                <img src="../../images/footer/main_tab_4.png" />
              </router-link>
            </li>
          </ul>
        </div>-->
      </div>
      <div class="myEPat-body">
        <div class="iconfont icon-tanhao" > </div>
        <p>验证登陆中......</p>
        <p>如过还没有自动跳转，请手动点击！</p>
        <router-link to="/myEPat/lijitiaozhuan">
          立即跳转
        </router-link>

      </div>







    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.myPET
  width 100%
  height 100%
  .myEPat-header
    width 100%
    height: 5%
    line-height: 30px
    font-size 20px
    color #7e8c8d
    display flex
    span:nth-child(2)
      text-align center
      flex 1


  .myEPat-body
    width 100%
    height: 600px
    background-color: #f1efeb;
    text-align center
    font-size 20px
    line-height  1.6
    color #7e8c8d
    .icon-tanhao
      padding-top 40px
      font-size 100px
      color #881719
    a
      display inline-block
      width 100px
      height: 30px
      line-height: 30px
      text-align: center
      background-color: white;
      border 1px solid #7e8c8d
      border-radius 15px
      text-decoration none
      color #7e8c8d




</style>
