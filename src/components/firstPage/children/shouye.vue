<template>
  <div>
    <scroller>
      <div class="shouyehuadong" id="shouyehuadong">
        <!--轮播图 -->
        <mt-swipe :auto="5000" :show-indicators="true" :continuous="true">
          <mt-swipe-item>
            <div>
              <a href="###">
                <img src="./shouye/lunbotu/7666821c190eab2da6d85ce6d9bef445.png" alt="">
              </a>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div>
              <a href="###">
                <img src="./shouye/lunbotu/a87ef931a96884b958d859952d3e40ad.png" alt="">
              </a>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div>
              <a href="###">
                <img src="./shouye/lunbotu/c0d1e757214e689262954a56b76b0740.jpg" alt="">
              </a>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div>
              <a href="###">
                <img src="./shouye/lunbotu/e924a1c2af4d577a8d06b594167648d0.jpg" alt="">
              </a>
            </div>
          </mt-swipe-item>
        </mt-swipe>

        <!--礼包区 和 列表区-->
        <div class="shopArea">
          <!--礼包区 -->
          <div class="package">
            <a href="###">
              <img src="./shouye/libao/eb1e56f630feb46a72be67984956c247.gif" alt="">
            </a>
          </div>
          <!--列表区-->
          <ul class="shop">
            <!--e宠团-->
            <li>
              <a href="###">
                <img src="./shouye/libao/27e9bbcf34c51c1077d4dd8b835d0a2f.png" alt="">
              </a>
            </li>
            <!--品牌特卖-->
            <li>
              <a href="###">
                <img src="./shouye/libao/7afb8e7f8be2b0dc2f91eec9a073cde8.png" alt="">
              </a>
            </li>
            <!--体验馆-->
            <li>
              <a href="###">
                <img src="./shouye/libao/e5aac3f233b17be1e7c245a598f812e0.png" alt="">
              </a>
            </li>
            <!--清仓特价-->
            <li>
              <a href="###">
                <img src="./shouye/libao/75feae28f5876aaa615478b0b68992c3.png" alt="">
              </a>
            </li>
            <!--热卖礼包-->
            <li>
              <a href="###">
                <img src="./shouye/libao/9c429ba6358ee54f4c6bdd8e4aa6831f.png" alt="">
              </a>
            </li>
          </ul>
        </div>
        <myLine />

        <!--每日疯抢-->
        <div >
          <div class="fengqiang">
            <div class="top" >
              <div class="title">
                <a href="###">
                  <img src="./shouye/meirifengqiang/suprice.png" alt="">
                </a>
              </div>
              <div class="time">
                <span>距本场结束</span>
                <span class="data">
              <span class="kuang">00</span>
              <span>:</span>
              <span class="kuang">11</span>
              <span>:</span>
              <span class="kuang">22</span>
            </span>
              </div>
              <a href="###" class="more">
                MORE
                <img src="./shouye/meirifengqiang/index_icon_comment_sanjiao.png" alt="">
              </a>
            </div>
          </div>
          <div id="mrfq">
            <ul class="bottom-1">
              <li>
                <a href="###">
                  <img src="./shouye/meirifengqiang/3a043e411401d3cac38cd27da5bf69c8.jpg" alt="">
                </a>
                <span>￥6元</span>
                <span class="sheng">省￥6元</span>
              </li>
              <li>
                <a href="###">
                  <img src="./shouye/meirifengqiang/3009a8cc214984c389458d54d21db2a9.jpg" alt="">
                </a>
                <span>￥6元</span>
                <span class="sheng">省￥6元</span>
              </li>
              <li>
                <a href="###">
                  <img src="./shouye/meirifengqiang/3a043e411401d3cac38cd27da5bf69c8.jpg" alt="">
                </a>
                <span>￥6元</span>
                <span class="sheng">省￥6元</span>
              </li>
              <li>
                <a href="###">
                  <img src="./shouye/meirifengqiang/3009a8cc214984c389458d54d21db2a9.jpg" alt="">
                </a>
                <span>￥6元</span>
                <span class="sheng">省￥6元</span>
              </li>
              <li>
                <a href="###">
                  <img src="./shouye/meirifengqiang/3a043e411401d3cac38cd27da5bf69c8.jpg" alt="">
                </a>
                <span>￥6元</span>
                <<span class="sheng">省￥6元</span>
              </li>
              <li>
                <a href="###">
                  <img src="./shouye/meirifengqiang/3009a8cc214984c389458d54d21db2a9.jpg" alt="">
                </a>
                <span>￥6元</span>
                <span class="sheng">省￥6元</span>
              </li>
            </ul>
          </div>
        </div>
        <myLine />

        <!--热门栏目-->
        <div class="hot">
          <div class="top">
            <a href="">
              <img src="./shouye/hot/fc0a266a307cf8a8d31cddc1f013b3f8.jpg" alt="">
            </a>
          </div>
          <div class="bottom">
            <div class="left">
              <a href="###">
                <img src="./shouye/hot/0d983a7720686c0f2a752f741f61cc39.jpg" alt="">
              </a>
            </div>
            <div class="right">
              <div>
                <a href="###">
                  <img src="./shouye/hot/8effccc6ec692af598.jpg" alt="">
                </a>
              </div>
              <div>
                <a href="###">
                  <img src="./shouye/hot/123sdfs.jpg" alt="">
                </a>
              </div>

            </div>
          </div>
        </div>

        <myLine />

        <!--潮品视频-->
        <myTitle title="cpsp" text="MORE" haveMore="true" />

        <div class="cpsp">
          <a href="###">
            <div class="vedio">
              <img src="./shouye/tiyanguan/images/vedio.jpg" alt="">
              <div class="play"></div>
              <div class="title">
                01:13
              </div>
            </div>
            <div class="text">
              <div class="left">
                神奇饮水除口臭
                <a href="###">
                  #猫咪保健
                </a>
              </div>
              <div class="right">
                <a href="###">
                  <i></i>
                  <span>15735</span>
                </a>
              </div>
            </div>
          </a>
        </div>

        <myLine />

        <!--体验馆-->
        <myTitle title="tyg" text="MORE" haveMore="true"/>
        <!--轮播图-->
        <mt-swipe :auto="1000" :show-indicators="true" :continuous="true">
          <mt-swipe-item>
            <a href="###">
              <img src="./shouye/tiyanguan/41e35ecbf5cbfcf85f75495d8967b5cc.jpg" alt="">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="###">
              <img src="./shouye/tiyanguan/51cfa965d3b55d0f027bd2854c8e61a2.jpg" alt="">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="###">
              <img src="./shouye/tiyanguan/41e35ecbf5cbfcf85f75495d8967b5cc.jpg" alt="">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="###">
              <img src="./shouye/tiyanguan/51cfa965d3b55d0f027bd2854c8e61a2.jpg" alt="">
            </a>
          </mt-swipe-item>
        </mt-swipe>


        <!--品牌特卖-->
        <myTitle title="pptm" haveMore="false"/>
        <div class="pinpaiSale">
          <div class="text">
            <span>我的日期不完美</span>
            <i>大牌降临一折起</i>
          </div>
          <div class="picture">
            <a href="###">
              <img src="./shouye/pinpaiSale/8d4d184bcf01207d3f039b406a904651.jpg" alt="">
            </a>
          </div>
        </div>

        <!--他的公益-->
        <myTitle title="tdgy" text="了解TA公益" haveMore="true"/>
        <div>
          <div class="gongyi">
            <div class="content">
              <p>
                截止今日，TA公益已联合E宠商城和
                <b>13</b>
                家品牌
              </p>
              <p>
                累积捐赠
                <span>855,546.56</span>
                元
              </p>
              <p>
                已合作
                <b>7</b>
                家公益组织，举办参与
                <b>2</b>
                场公益活动,
              </p>
              <p>
                助养
                <b>32</b>
                位领养人
              </p>

            </div>
          </div>
          <div class="zzshang">
            <div class="left">
              <img src="./shouye/tadegongyi/zanzhushang.png" alt="">
            </div>
            <div class="right">
              <ul>
                <li>
                  <img src="./shouye/tadegongyi/epet_brand_logo.png" alt="">
                  <p>已捐助¥213408.68</p>
                </li>
                <li>
                  <img src="./shouye/tadegongyi/epet_brand_logo.png" alt="">
                  <p>已捐助¥213408.68</p>
                </li>
                <li>
                  <img src="./shouye/tadegongyi/epet_brand_logo.png" alt="">
                  <p>已捐助¥213408.68</p>
                </li>
                <li>
                  <img src="./shouye/tadegongyi/epet_brand_logo.png" alt="">
                  <p>已捐助¥213408.68</p>
                </li>
                <li>
                  <img src="./shouye/tadegongyi/epet_brand_logo.png" alt="">
                  <p>已捐助¥213408.68</p>
                </li>
                <li>
                  <img src="./shouye/tadegongyi/epet_brand_logo.png" alt="">
                  <p>已捐助¥213408.68</p>
                </li>
                <li>
                  <img src="./shouye/tadegongyi/epet_brand_logo.png" alt="">
                  <p>已捐助¥213408.68</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <myLine />

        <!--口碑评价-->
        <myTitle title="kbpj" text="好评率99.64%" haveMore="true"/>
        <div class="kbpj">
          <ul>
            <li>
              <div class="image">
                <img src="./shouye/koubeiqingjia/zhonghuatianyuanmao.jpg" alt="">
              </div>
              <div class="wenben" >
                <div class="joinData">加入E宠2年0月</div>
                <div class="text">
                  <div class="title">
                    <span class="name">红*****ω</span>
                    <span class="type">中华田园猫</span>
                  </div>
                  <div class="content">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="image">
                <img src="./shouye/koubeiqingjia/zhonghuatianyuanmao.jpg" alt="">
              </div>
              <div class="wenben" >
                <div class="joinData">加入E宠2年0月</div>
                <div class="text">
                  <div class="title">
                    <span class="name">红*****ω</span>
                    <span class="type">中华田园猫</span>
                  </div>
                  <div class="content">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </div>
                </div>
              </div>
            </li>
            <li >
              <div class="image">
                <img src="./shouye/koubeiqingjia/zhonghuatianyuanmao.jpg" alt="">
              </div>
              <div class="wenben" >
                <div class="joinData">加入E宠2年0月</div>
                <div class="text">
                  <div class="title">
                    <span class="name">红*****ω</span>
                    <span class="type">中华田园猫</span>
                  </div>
                  <div class="content">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </div>
                </div>
              </div>
            </li>
            <li >
              <div class="image">
                <img src="./shouye/koubeiqingjia/zhonghuatianyuanmao.jpg" alt="">
              </div>
              <div class="wenben" >
                <div class="joinData">加入E宠2年0月</div>
                <div class="text">
                  <div class="title">
                    <span class="name">红*****ω</span>
                    <span class="type">中华田园猫</span>
                  </div>
                  <div class="content">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <myLine />


      </div>
    </scroller>
  </div>

</template>
<script>
    import Vue from "vue"
    import { Swipe, SwipeItem } from 'mint-ui';
    import BScroll from 'better-scroll'

    import myLine from "../../line/line.vue"
    import myTitle from "../../title/title.vue"

//    声明使用
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default {
        methods:{

        },
      created(){
        this.$nextTick(()=>{
          new BScroll(document.getElementById('mrfq'),{
            scrollX: 'true',
            click:"true"
          })
        })
      },
        components:{
          myLine,
          myTitle
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.shouyehuadong
  height 100%
  margin-top 154px
  padding-bottom 220px
  /*轮播图*/
  .mint-swipe
    height 160px
  /*<!--礼包区 和 列表区-->*/
      /*礼包区*/
  .shopArea
    width 100%
    .package
      width 100%
      height: 120px
      a
        width 100%
        height: 120px
        img
          width 100%
          height: 120px
      /*列表区*/
  .shop
    width: 100%
    display flex
    li
      flex 1


  /*每日疯抢*/
  .fengqiang
    padding 10px
    width 100%
    /*height 44px*/
    margin-bottom 20px
    .top
      overflow hidden
      div
        float left
      .title
        width 30%
        margin-left -20px
      .time
        span
          font-size 13px
          float left
        .data
          margin-left 10px
          .kuang
            display inline-block
            width: 18px
            height  18px
            border 1px solid gray
          span
            margin-right 2px

      .more
        font-size 13px
        text-decoration none
        color: #333
        display inline-block
        float right
        img
          width 8px



  .bottom-1
    width 700px
    height: 130px
    /*background-color: orange;*/
    li
      width 100px
      height: 130px
      /*background: lightyellow;*/
      text-align center
      margin-right 5px
      margin-left: 5px
      float left
      img
        width 83px
        height: 83px
      span
        display block
        text-align center
        color: red
        font-size 16px
      .sheng
        color: #999
        font-size 12px

   /*热门栏目*/
  .hot
    overflow: hidden
    .top
      width 100%
      height 40px
      border-bottom 1px solid #999
    .bottom
      .left
        float: left;
        width 43%
        /*height 172px*/
      .right
        float: left;
        width: 57%




  /*潮品视频*/
  .cpsp
    position relative
    .vedio
      width 100%
      .play
        background: url("./shouye/tiyanguan/images/play.png") no-repeat center
        background-size 20px 20px
        width 20px
        height: 20px
        position absolute
        top: 30%
        left: 50%

      .title
        color: white
        font-size 12px
        position absolute
        top: 0
        right: 0


    .text
      position absolute
      bottom 0
      width 100%
      height 40px
      padding: 10px 15px
      background-color: white;
      overflow hidden
      font-size 12px
      color: grey
      .left
        float: left
        a
          text-decoration none
          color: red
      .right
        float: right
        a
          text-decoration none
          color: grey
          float left
        i
          float: left;
          display inline-block
          width: 20px
          height: 17px
          background url("./shouye/tiyanguan/images/view-black.png") no-repeat center
          background-size 10px 8px



   /* <!--品牌特卖-->*/
  .pinpaiSale
    border-top 1px solid #999
    .text
      width: 100%;
      height: 45px
      padding 10px
      /*background-color: pink;*/
      span
        font-size 16px
      i
        font-style normal
        font-size 12px
        color: #999


  /*我的公益*/
  .gongyi
    color white
    font-size 14px
    text-align center
    .content
      padding-top 20px
      border-top 1px solid red
      width 100%
      height: 140px
      background: url("./shouye/tadegongyi/bg.jpg") no-repeat center;
      background-size 100% auto
      p
        margin-bottom  10px
        b
          padding 0 5px
          margin: 0 5px
          background-color: white;
          border-radius 5px
          color red
          font-weight bold

        span
          color red




  .zzshang
    width: 100%
    height 71px
    .left
      padding-top 10px
      float: left;
      width 20%
      height: 71px
      text-align center
      img
        width 80%
    .right
      width 80%
      float: left;
      ul
        width 2000px
        li
          float left
          width 100px
          height 71px
          border-left: 2px solid #c4c4c4
          padding-left 2px
          padding-right: 2px
          /*background: yellowgreen;*/
          img
            width 70%
            /*border-bottom: 1px solid #c4c4c4*/
            margin 8px
          p
            white-space nowrap
            overflow: hidden;
            text-overflow ellipsis





  /*口碑评价*/
  .kbpj
    width 100%
    ul
      overflow hidden
      /*background-color: yellow;*/
      li
        overflow hidden
        float: left;
        margin-left 2%
        /*margin-top 2%*/
        margin-bottom  2%
        width 47%
        height 264px
        position relative
        .image
          img
            width 100%
        .wenben
          position absolute
          z-index 10
          top 50%
          .joinData
            font-size 12px
            text-align center
            color white
            background-color: rgba(0,0,0,0.2);
          .text
            font-size 13px
            padding 2px
            background: #f5f5f5;
            color: grey
            .title
              padding: 5px
              overflow hidden
              .name
                float left
              .type
                float: left;


            .content
              overflow hidden
              line-height 2.1
              padding-left 6px
              padding-right 6px


</style>

