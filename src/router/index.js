import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },
    { path: '/products/:productId', name: 'Product', component: Product }
  ]
})

//export default routes