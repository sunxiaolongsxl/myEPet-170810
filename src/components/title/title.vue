<template>
    <div class="publicTitle">
      <div class="content">
        <img src="./images/cpsp.png" alt="">
      </div>
      <div class="more">
        <a href="###">
          <img src="./images/c6b7ac04e8c6cb827365c17bd74aef59.png" alt="">
        </a>
      </div>
    </div>
</template>
<script>
    export default {
      data(){
          return{

          }
      },
      props:["title"],

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.publicTitle
  width 100%
  height 63px
  line-height 63px
  position relative
  .content
    width 100%
    padding-top  7px
    vertical-align middle
    text-align center
    img
      display inline-block
      width: 188px
      height: 53px
  .more
    width 30%
    height 63px
    position absolute
    right  0
    bottom: 0
    a
      img
        width 63px
        height: 50px
        position absolute
        bottom 0
        right 0


</style>
