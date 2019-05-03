import Vue from 'vue'
import Router from 'vue-router'

import Goods from './views/Goods.vue'
import Ratings from './views/Ratings.vue'
import Seller from './views/Seller.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  linkActiveClass: 'active',
  // linkExactActiveClass: 'exact',
  
  routes: [
    {
      path: '/',
      redirect: '/goods',
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
  ]
})
