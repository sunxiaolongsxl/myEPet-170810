<template>
  <div class="place-wrap">
    <scroller>
      <div>
        <div class="top">

          <div  style="margin-top: 10px" >
            <span class="topspanactive">
              <router-link to="/firstPage?pet-type=cat">猫站</router-link>
            </span>
            <span>
              <router-link to="/firstPage?pet-type=dog">狗站</router-link>
            </span>
            <span>
              <router-link to="/firstPage?pet-type=shuizu">水族站</router-link>
            </span>
          </div>

        </div>
        <!--引入的地区插件-->
        <div class="citybox"  style="margin-top: 10px; background-color:white !important;" >
          <h2>按拼音首字母选择<span class="arrow">&raquo;</span></h2>
          <ol>
            <li id="city-A">
              <p class="cf">
                <span class="label" ><strong>A</strong></span>
                <span style="width: 100%"><a href="###">鞍山</a><a href="###">安顺</a><a href="###">阿坝</a><a href="###">阿拉善</a><a href="###">阿里</a><a href="###">安康</a><a href="###">阿克苏</a><a href="###">安庆</a><a href="###">阿勒泰</a><a href="###">安阳</a><a href="###">澳门</a></span>
              </p>
            </li>
            <li id="city-B">
              <p class="cf">
                <span class="label"><strong>B</strong></span>
                <span style="width: 100%"><a href="###">北京</a><a href="###">包头</a><a href="###">保定</a><a href="###">巴中</a><a href="###">蚌埠</a><a href="###">白银</a><a href="###">白城</a><a href="###">白山</a><a href="###">北海</a><a href="###">巴彦淖尔</a><a href="###">宝鸡</a><a href="###">百色</a><a href="###">本溪</a><a href="###">保山</a><a href="###">毕节</a><a href="###">博尔塔拉</a><a href="###">滨州</a><a href="###">亳州</a><a href="###">巴州</a></span>
              </p>
            </li>
            <li id="city-C">
              <p class="cf">
                <span class="label"><strong>C</strong></span>
                <span style="width: 100%"><a href="###">成都</a><a href="###">重庆</a><a href="###">常州</a><a href="###">长沙</a><a href="###">长春</a><a href="###">赤峰</a><a href="###">楚雄</a><a href="###">长治</a><a href="###">巢湖</a><a href="###">崇左</a><a href="###">潮州</a><a href="###">昌吉</a><a href="###">沧州</a><a href="###">郴州</a><a href="###">常德</a><a href="###">滁州</a><a href="###">朝阳</a><a href="###">昌都</a><a href="###">池州</a><a href="###">承德</a></span>
              </p>
            </li>
            <li id="city-D">
              <p class="cf">
                <span class="label"><strong>D</strong></span>
                <span style="width: 100%"><a href="###">东莞</a><a href="###">大连</a><a href="###">东营</a><a href="###">大庆</a><a href="###">大同</a><a href="###">大理</a><a href="###">德阳</a><a href="###">迪庆</a><a href="###">达州</a><a href="###">德州</a><a href="###">丹东</a><a href="###">大兴安岭</a><a href="###">德宏</a><a href="###">定西</a></span>
              </p>
            </li>
            <li id="city-E">
              <p class="cf">
                <span class="label"><strong>E</strong></span>
                <span style="width: 100%"><a href="###">恩施</a><a href="###">鄂州</a><a href="###">鄂尔多斯</a></span>
              </p>
            </li>
            <li id="city-F">
              <p class="cf">
                <span class="label"><strong>F</strong></span>
                <span style="width: 100%"><a href="###">福州</a><a href="###">佛山</a><a href="###">抚顺</a><a href="###">阜阳</a><a href="###">抚州</a><a href="###">防城港</a><a href="###">阜新</a></span>
              </p>
            </li>
            <li id="city-G">
              <p class="cf">
                <span class="label"><strong>G</strong></span>
                <span style="width: 100%"><a href="###">广州</a><a href="###">贵阳</a><a href="###">桂林</a><a href="###">赣州</a><a href="###">广元</a><a href="###">果洛</a><a href="###">固原</a><a href="###">甘南</a><a href="###">甘孜</a><a href="###">广安</a><a href="###">贵港</a></span>
              </p>
            </li>
            <li id="city-H">
              <p class="cf">
                <span class="label"><strong>H</strong></span>
                <span style="width: 100%"><a href="###">杭州</a><a href="###">哈尔滨</a><a href="###">合肥</a><a href="###">邯郸</a><a href="###">惠州</a><a href="###">海口</a><a href="###">呼和浩特</a><a href="###">衡阳</a><a href="###">湖州</a><a href="###">淮北</a><a href="###">鹤岗</a><a href="###">海北</a><a href="###">海东</a><a href="###">黄南</a><a href="###">菏泽</a><a href="###">海南州</a><a href="###">黑河</a><a href="###">和田</a><a href="###">哈密</a><a href="###">淮安</a><a href="###">淮南</a><a href="###">黄山</a><a href="###">海西</a><a href="###">贺州</a><a href="###">怀化</a><a href="###">河池</a><a href="###">呼伦贝尔</a><a href="###">衡水</a><a href="###">河源</a><a href="###">红河</a><a href="###">汉中</a><a href="###">黄冈</a><a href="###">黄石</a><a href="###">鹤壁</a><a href="###">葫芦岛</a></span>
              </p>
            </li>
            <li id="city-J">
              <p class="cf">
                <span class="label"><strong>J</strong></span>
                <span style="width: 100%"><a href="###">济南</a><a href="###">济宁</a><a href="###">嘉兴</a><a href="###">金华</a><a href="###">焦作</a><a href="###">荆州</a><a href="###">吉林</a><a href="###">锦州</a><a href="###">江门</a><a href="###">景德镇</a><a href="###">吉安</a><a href="###">佳木斯</a><a href="###">酒泉</a><a href="###">金昌</a><a href="###">鸡西</a><a href="###">济源</a><a href="###">晋城</a><a href="###">揭阳</a><a href="###">晋中</a><a href="###">荆门</a><a href="###">九江</a></span>
              </p>
            </li>
            <li id="city-K">
              <p class="cf">
                <span class="label"><strong>K</strong></span>
                <span style="width: 100%"><a href="###">昆明</a><a href="###">昆山</a><a href="###">喀什</a><a href="###">克拉玛依</a><a href="###">开封</a><a href="###">克州</a></span>
              </p>
            </li>
            <li id="city-L">
              <p class="cf">
                <span class="label"><strong>L</strong></span>
                <span style="width: 100%"><a href="###">兰州</a><a href="###">临沂</a><a href="###">连云港</a><a href="###">聊城</a><a href="###">临汾</a><a href="###">柳州</a><a href="###">洛阳</a><a href="###">廊坊</a><a href="###">龙岩</a><a href="###">六盘水</a><a href="###">凉山</a><a href="###">六安</a><a href="###">丽江</a><a href="###">临沧</a><a href="###">陇南</a><a href="###">拉萨</a><a href="###">辽源</a><a href="###">辽阳</a><a href="###">莱芜</a><a href="###">漯河</a><a href="###">吕梁</a><a href="###">丽水</a><a href="###">临夏</a><a href="###">林芝</a><a href="###">娄底</a><a href="###">来宾</a><a href="###">泸州</a><a href="###">乐山</a></span>
              </p>
            </li>
            <li id="city-M">
              <p class="cf">
                <span class="label"><strong>M</strong></span>
                <span style="width: 100%"><a href="###">马鞍山</a><a href="###">绵阳</a><a href="###">茂名</a><a href="###">牡丹江</a><a href="###">梅州</a><a href="###">眉山</a></span>
              </p>
            </li>
            <li id="city-N">
              <p class="cf">
                <span class="label"><strong>N</strong></span>
                <span style="width: 100%"><a href="###">南京</a><a href="###">宁波</a><a href="###">南通</a><a href="###">南宁</a><a href="###">南昌</a><a href="###">南充</a><a href="###">宁德</a><a href="###">内江</a><a href="###">怒江</a><a href="###">南平</a><a href="###">南阳</a><a href="###">那曲</a></span>
              </p>
            </li>
            <li id="city-P">
              <p class="cf">
                <span class="label"><strong>P</strong></span>
                <span style="width: 100%"><a href="###">萍乡</a><a href="###">平顶山</a><a href="###">莆田</a><a href="###">濮阳</a><a href="###">攀枝花</a><a href="###">平凉</a><a href="###">普洱</a><a href="###">盘锦</a></span>
              </p>
            </li>
            <li id="city-Q">
              <p class="cf">
                <span class="label"><strong>Q</strong></span>
                <span style="width: 100%"><a href="###">青岛</a><a href="###">泉州</a><a href="###">秦皇岛</a><a href="###">齐齐哈尔</a><a href="###">庆阳</a><a href="###">衢州</a><a href="###">黔西南</a><a href="###">钦州</a><a href="###">黔南</a><a href="###">曲靖</a><a href="###">黔东南</a><a href="###">七台河</a><a href="###">清远</a></span>
              </p>
            </li>
            <li id="city-R">
              <p class="cf">
                <span class="label"><strong>R</strong></span>
                <span style="width: 100%"><a href="###">日照</a><a href="###">日喀则</a></span>
              </p>
            </li>
            <li id="city-S">
              <p class="cf">
                <span class="label"><strong>S</strong></span>
                <span style="width: 100%"><a href="###">上海</a><a href="###">深圳</a><a href="###">沈阳</a><a href="###">苏州</a><a href="###">石家庄</a><a href="###">绍兴</a><a href="###">顺德</a><a href="###">三亚</a><a href="###">韶关</a><a href="###">绥化</a><a href="###">松原</a><a href="###">上饶</a><a href="###">十堰</a><a href="###">三门峡</a><a href="###">山南</a><a href="###">邵阳</a><a href="###">遂宁</a><a href="###">商丘</a><a href="###">朔州</a><a href="###">随州</a><a href="###">汕尾</a><a href="###">四平</a><a href="###">三峡</a><a href="###">宿迁</a><a href="###">三明</a><a href="###">石嘴山</a><a href="###">双鸭山</a><a href="###">汕头</a><a href="###">宿州</a><a href="###">商洛</a></span>
              </p>
            </li>
            <li id="city-T">
              <p class="cf">
                <span class="label"><strong>T</strong></span>
                <span style="width: 100%"><a href="###">天津</a><a href="###">太原</a><a href="###">泰安</a><a href="###">台州</a><a href="###">唐山</a><a href="###">泰州</a><a href="###">塔城</a><a href="###">铜陵</a><a href="###">铜川</a><a href="###">台北</a><a href="###">铜仁</a><a href="###">吐鲁番</a><a href="###">天水</a><a href="###">通辽</a><a href="###">铁岭</a><a href="###">通化</a></span>
              </p>
            </li>
            <li id="city-W">
              <p class="cf">
                <span class="label"><strong>W</strong></span>
                <span style="width: 100%"><a href="###">武汉</a><a href="###">无锡</a><a href="###">温州</a><a href="###">芜湖</a><a href="###">威海</a><a href="###">潍坊</a><a href="###">乌鲁木齐</a><a href="###">梧州</a><a href="###">吴忠</a><a href="###">武威</a><a href="###">渭南</a><a href="###">乌兰察布</a><a href="###">文山</a><a href="###">乌海</a></span>
              </p>
            </li>
            <li id="city-X">
              <p class="cf">
                <span class="label"><strong>X</strong></span>
                <span style="width: 100%"><a href="###">西安</a><a href="###">厦门</a><a href="###">徐州</a><a href="###">襄阳</a><a href="###">西宁</a><a href="###">孝感</a><a href="###">西双版纳</a><a href="###">新余</a><a href="###">湘潭</a><a href="###">锡林郭勒</a><a href="###">兴安</a><a href="###">邢台</a><a href="###">新乡</a><a href="###">湘西</a><a href="###">忻州</a><a href="###">咸阳</a><a href="###">宣城</a><a href="###">香港</a><a href="###">信阳</a><a href="###">咸宁</a><a href="###">许昌</a></span>
              </p>
            </li>
            <li id="city-Y">
              <p class="cf">
                <span class="label"><strong>Y</strong></span>
                <span style="width: 100%"><a href="###">扬州</a><a href="###">烟台</a><a href="###">盐城</a><a href="###">运城</a><a href="###">义乌</a><a href="###">岳阳</a><a href="###">宜昌</a><a href="###">玉林</a><a href="###">银川</a><a href="###">鹰潭</a><a href="###">雅安</a><a href="###">伊犁</a><a href="###">玉树</a><a href="###">宜春</a><a href="###">营口</a><a href="###">永州</a><a href="###">宜宾</a><a href="###">益阳</a><a href="###">玉溪</a><a href="###">阳泉</a><a href="###">延安</a><a href="###">榆林</a><a href="###">云浮</a><a href="###">延边</a><a href="###">阳江</a><a href="###">伊春</a></span>
              </p>
            </li>
            <li id="city-Z">
              <p class="cf">
                <span class="label"><strong>Z</strong></span>
                <span style="width: 100%"><a href="###">郑州</a><a href="###">镇江</a><a href="###">中山</a><a href="###">淄博</a><a href="###">珠海</a><a href="###">遵义</a><a href="###">株洲</a><a href="###">自贡</a><a href="###">舟山</a><a href="###">湛江</a><a href="###">肇庆</a><a href="###">漳州</a><a href="###">张掖</a><a href="###">昭通</a><a href="###">张家界</a><a href="###">周口</a><a href="###">驻马店</a><a href="###">张家口</a><a href="###">资阳</a><a href="###">中卫</a><a href="###">枣庄</a></span>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </scroller>
  </div>



</template>
<script>
    export default {
        created(){
          $(function (){
            $(".citybox li").hover(function(){
              $(this).addClass('hover');
            }, function(){
              $(this).removeClass('hover');
            });
          });
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.place-wrap
  width 100%
  height 100%
  background-color: white;
  position fixed
  top: 0
  z-index 1000

  .citybox
    width 100% !important
    overflow-wrap: break-word;
    .data-v-ecaca2b0
      width 300px !important


  .top
    width 100%
    height: 40px
    span
      display inline-block
      width 80px
      height 40px
      text-align center
      line-height: 40px
      background-color: gray;
      color black
      border-radius 10px
      margin-left 8%
      a
        color black
    .topspanactive
      background-color: red;
      color white


</style>
