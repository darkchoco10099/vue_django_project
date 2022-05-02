import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import Chufangsheding from '@/page/chufangsheding'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/page/home.vue')
      chi
    },
    {
      path: '/chufangsheding',
      name: '处方设定',
      component: Chufangsheding
    }
  ]
})
