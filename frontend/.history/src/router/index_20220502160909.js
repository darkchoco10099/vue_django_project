import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import Chufangsheding from '@/page/chufangsheding'
// import { component } from 'vue/types/umd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      mode: 'history',
  base: '/project-name/',
      path: '/',
      component: () => import('@/page/home.vue'),
      children: [
        {
          path: '/chufangsheding',
          name: 'chufangsheding',
          component: () => import('@/page/chufangsheding.vue')
        },
        {
          path: '/caiyao',
          name: 'caiyao',
          component: () => import('@/page/caiyao.vue')
        }
      ]
    }
    // {
    //   path: '/chufangsheding',
    //   name: '处方设定',
    //   component: Chufangsheding
    // }
  ]
})
