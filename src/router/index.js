import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import addArticle from '@/components/addArticle'
import addMenu from '@/components/addMenu'
import listArticle from '@/components/listArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
