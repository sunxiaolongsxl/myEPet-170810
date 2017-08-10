/**
 * 入口js
 */
import Vue from 'vue'
import BScroll from 'better-scroll'
import VueScroller from "vue-scroller"
Vue.use(VueScroller)
/*引入自定义路由文件*/
import router from "./components/router/router"
import app from './components/app.vue'

//引入自定义文件




new Vue({
  el: '#app',
  components: {
    app
  },
  router,
  template: '<app />'
})
