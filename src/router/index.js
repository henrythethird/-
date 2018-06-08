import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/post/:title',
      name: 'detail',
      component: Detail,
      props: true
    }
  ]
})
