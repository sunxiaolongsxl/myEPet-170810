import Vue from 'vue'
/*引入VueRouter，并声明使用*/
import VueRouter from "vue-router"
import "./publicCss.css"

import firstPage from "../../components/firstPage/firstPage.vue"
import selectClass from "../../components/selectClass/selectClass.vue"
import shopCar from "../../components/shopCar/shopCar.vue"
import myEPat from "../../components/myEPat/myEPat.vue"

import shouye from "../../components/firstPage/children/shouye.vue"
import maoliang from "../../components/firstPage/children/maoliang.vue"
import temai from "../../components/firstPage/children/temai.vue"
import guantouchaoshi from "../../components/firstPage/children/guantouchaoshi.vue"
import chaopinshipin from "../../components/firstPage/children/chaopinshipin.vue"
import xinmiaoketang from "../../components/firstPage/children/xinmiaoketang.vue"

import place from "../../components/place/place.vue"


import lijitiaozhuan from "../../components/myEPat/lijitiaozhuan/lijitiaozhuan.vue"

Vue.use(VueRouter)
/*注册路由器*/
export  default new VueRouter({

  mode:"history",
  linkActiveClass:"active",
  routes:[
    {
      path:"/",
      redirect: "/firstPage"
    },
    {
      path:"/firstPage",
      redirect:"/firstPage/shouye"
      // component: firstPage/*,报错解决不了？ 地址是对的  就是不显示相应的组件
      // children:[
      //   {
      //     path:"/firstPage/shouye",
      //     component:shouye
      //   },
      //   {
      //     path:"/firstPage/maoliang",
      //     component:maoliang
      //   },
      //   {
      //     path:"/firstPage/temai",
      //     component:temai
      //   },
      //   {
      //     path:"/firstPage/guantouchaoshi",
      //     component:guantouchaoshi
      //   },
      //   {
      //     path:"/firstPage/chaopinshipin",
      //     component:chaopinshipin
      //   },
      //   {
      //     path:"/firstPage/xinmiaoketang",
      //     component:xinmiaoketang
      //   },
      // ]*/
    },
    {
      path:"/selectClass",
      component: selectClass
    },
    {
      path:"/shopCar",
      component: shopCar
    },
    {
      path:"/myEPat",
      component: myEPat
    },
    {
      path:"/firstPage/shouye",
      component:shouye
    },
    {
      path:"/firstPage/maoliang",
      component:maoliang
    },
    {
      path:"/firstPage/temai",
      component:temai
    },
    {
      path:"/firstPage/guantouchaoshi",
      component:guantouchaoshi
    },
    {
      path:"/firstPage/chaopinshipin",
      component:chaopinshipin
    },
    {
      path:"/firstPage/xinmiaoketang",
      component:xinmiaoketang
    },
    {
      path:"/myEPat/lijitiaozhuan",
      component: lijitiaozhuan
    },
    {
     path: "/place",
     component: place
     }
  ]
})
