import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '@/components/Blogs'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Blogs', component: Blogs },
    { path: '/blogs/:id', name: 'Blog', component: Blog }
  ]
})

//export default routes