import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blogs from '@/components/Blogs'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/blogs', name: 'Blogs', component: Blogs },
    { path: '/blogs/:blogsId', name: 'Blog', component: Blog }
  ]
})

//export default routes