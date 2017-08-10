<template>
  <div class="footer">
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
  </div>
</template>
<script>
    export default {
      props:[
        "changeHeadIsShow"
      ]
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*底部*/
.footer
  ul
    background-color white
    width: 100%;
    height: 55px;
    line-height: 55px;
    /*background: pink;*/
    display: flex;
    position: fixed;
    bottom: 0;
    border-top: 1px solid gainsboro;
    li
      flex:1;
      text-align: center;
      list-style: none;
      img
        width: 55px;
        height: 55px;


</style>
