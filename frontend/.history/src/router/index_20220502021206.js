import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 's',
      component: Home
    },
    {
      path: '/chufangsheding',
      name: '处方设定',
      component: Home
    }
  ]
})
