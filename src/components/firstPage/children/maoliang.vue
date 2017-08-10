<template>
  <scroller>
    <div class="maoliang-wrap">
      <!--轮播图-->
      <div class="lunbotu">
        <mt-swipe :auto="4000" :show-indicators="true" :continuous="true">
          <mt-swipe-item>
            <div>
              <a href="###">
                <img src="./maoliang/lunbotu/2d575de788e21f9938ea1c713d717084.jpg" alt="">
              </a>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div>
              <a href="###">
                <img src="./maoliang/lunbotu/8e751fb5f009d1e4c5b9c47fc3ba8bc8.jpg" alt="">
              </a>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div>
              <a href="###">
                <img src="./maoliang/lunbotu/c45a12a89be62c75b0738f6a07d29b9e.jpg" alt="">
              </a>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div>
              <a href="###">
                <img src="./maoliang/lunbotu/e3d334087503afdfd30f0ca721294ba0.jpg" alt="">
              </a>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--shop-->
      <ul class="shop">
        <!--进口猫粮-->
        <li>
          <a href="###">
            <img src="./maoliang/3d1bf8fa122cb7ae9b909dabe41680af.png" alt="">
          </a>
        </li>
        <!--国产成猫-->
        <li>
          <a href="###">
            <img src="./maoliang/acf08d74caff5b8fe79a5f360ef9724e.png" alt="">
          </a>
        </li>
        <!--泌尿护理-->
        <li>
          <a href="###">
            <img src="./maoliang/18d591aca671bcd8aa13bc883d26ba3b.png" alt="">
          </a>
        </li>
        <!--去毛球服-->
        <li>
          <a href="###">
            <img src="./maoliang/8f375311125682db20ace86575196977.png" alt="">
          </a>
        </li>
      </ul>

      <myline/>

      <div class="someFood">
        <ul>
          <li>
            <div class="text">
              <span>喜跃VS妙多乐</span>
              <i>1元换罐头</i>
            </div class="text">
            <a href="###">
              <img src="./maoliang/somefood/gaoe1cbb61b8ae1d2c41c39a0b49bb5f2be.jpg@.jpg" alt="">
            </a>
          </li>
          <li>
            <div class="text">
              <span>喜跃VS妙多乐</span>
              <i>1元换罐头</i>
            </div>
            <a href="###">
              <img src="./maoliang/somefood/lanc45a12a89be62c75b0738f6a07d29b9e.jpg@.jpg" alt="">
            </a>
          </li>
          <li>
            <div class="text">
              <span>喜跃VS妙多乐</span>
              <i>1元换罐头</i>
            </div>
            <a href="###">
              <img src="./maoliang/somefood/wu26a1146a3c18ec810ac12334fe3b1b1f.jpg@.jpg" alt="">
            </a>
          </li>
        </ul>

      </div>

      <!--列表区-->
      <div class="list">
        <mt-navbar v-model="selected">
        <mt-tab-item id="1">
          <span>进口猫粮</span>
        </mt-tab-item>
        <mt-tab-item id="2">
          <span>国产猫粮</span>
        </mt-tab-item>
        <mt-tab-item id="3">
          <span>差零食吃</span>
        </mt-tab-item>
        <mt-tab-item id="4">
          <span>处方猫粮</span>
        </mt-tab-item>
      </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <ul>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
              <a href="###">
                <div class="left">
                  <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                </div>
                <div class="right">
                  <p class="ptop">
                    比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                  </p>
                  <p>
                    <span class="price">￥145.00元</span>
                    <span><del>36.25元/斤</del></span>
                  </p>
                  <p>
                    <span>互动:1114(98%好评)</span>
                    <span>售出:3837</span>
                  </p>
                </div>
                <div class="car">
                  <a href="###">
                    <img src="./maoliang/list/addcart.png" alt="">
                  </a>
                </div>
              </a>
            </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
              <a href="###">
                <div class="left">
                  <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                </div>
                <div class="right">
                  <p class="ptop">
                    比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                  </p>
                  <p>
                    <span class="price">￥145.00元</span>
                    <span><del>36.25元/斤</del></span>
                  </p>
                  <p>
                    <span>互动:1114(98%好评)</span>
                    <span>售出:3837</span>
                  </p>
                </div>
                <div class="car">
                  <a href="###">
                    <img src="./maoliang/list/addcart.png" alt="">
                  </a>
                </div>
              </a>
            </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
              <a href="###">
                <div class="left">
                  <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                </div>
                <div class="right">
                  <p class="ptop">
                    比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                  </p>
                  <p>
                    <span class="price">￥145.00元</span>
                    <span><del>36.25元/斤</del></span>
                  </p>
                  <p>
                    <span>互动:1114(98%好评)</span>
                    <span>售出:3837</span>
                  </p>
                </div>
                <div class="car">
                  <a href="###">
                    <img src="./maoliang/list/addcart.png" alt="">
                  </a>
                </div>
              </a>
            </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <ul>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <ul>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/a78d5e324b3075a1dc8dfc63395663bd.png" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
            <ul>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
              <li >
                <a href="###">
                  <div class="left">
                    <img src="./maoliang/list/0caa6b75da6c09e4b6b76723dada1fec.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="ptop">
                      比瑞吉 基础呵护系列 全价幼猫怀孕及哺乳猫粮 2kg
                    </p>
                    <p>
                      <span class="price">￥145.00元</span>
                      <span><del>36.25元/斤</del></span>
                    </p>
                    <p>
                      <span>互动:1114(98%好评)</span>
                      <span>售出:3837</span>
                    </p>
                  </div>
                  <div class="car">
                    <a href="###">
                      <img src="./maoliang/list/addcart.png" alt="">
                    </a>
                  </div>
                </a>
              </li>
            </ul>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>







    </div>
  </scroller>

</template>
<script>
    import Vue from "vue"
    import { Swipe, SwipeItem,Navbar, TabItem,TabContainer, TabContainerItem } from 'mint-ui';

    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    import line from "../../line/line.vue"
    export default {
      data(){
          return{
            selected:true
          }
      },
      components:{
        myline:line
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*轮播图*/
.maoliang-wrap
  margin-top 154px
  padding-bottom: 210px
  .mint-swipe
    height 160px
  .shop
       width: 100%
       display flex
       li
         flex 1


  .someFood
    li
      .text
        width 100%
        height 45px
        line-height 45px
        margin-left 8px
        span
          font-size 15px
          color #333333
        i
          font-size: 14px
          color: #a3a3a3;
          font-style: normal

      a
        img
          width:100%
  .list
    font-size 20px
    color #333333
    .mint-tab-item
      color #333333
      /*background-color: #d7d7d7;*/
      span
        display inline-block
        width 60px
        font-size 14px
        height 20px
        line-height 20px
        text-align center
        /*background-color: #d7d7d7;*/
        color #333333
    .is-selected
      span
        color white
        background-color: red;
        display inline-block
        width 60px
        font-size 14px
        height 20px
        line-height 20px
        text-align center


    .mint-tab-container
      /*background-color: yellow;*/
      .mint-tab-container-wrap
        .mint-tab-container-item
          li
            width 100%
            height 127px
            /*background-color: orange;*/
            padding 5px
            overflow hidden
            position relative
            .left
              width 30%
              margin-right 10px
              float left
              img
                width 100px
                height 100px
            .right
              font-size 14px
              color #333333
              width 60%
              float: left;
              p
                margin-bottom 10px
                span
                  color #7e8c8d
                .price
                  color: red
              .ptop
                margin-bottom 20px

            .car
              position: absolute
              bottom 30%
              right:2%
              img
                width 30px

</style>
