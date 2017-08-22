import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '@/components/Blogs'
import Blog from '@/components/Blog'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Blogs', component: Blogs },
    { path: '/blogs/:id', name: 'Blog', component: Blog },
    { path: '/create', name: 'Create', component: Create }
  ]
})

//export default routes