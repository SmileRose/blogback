import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
const menu = r => require.ensure([], () => r(require('@/components/menu')), 'menu');
const login = r => require.ensure([], () => r(require('@/pages/login')), 'login');
const home = r => require.ensure([], () => r(require('@/pages/home')), 'home');
const articlelist = r => require.ensure([], () => r(require('@/pages/articlelist')), 'articlelist');
const articleadd = r => require.ensure([], () => r(require('@/pages/articleadd')), 'articleadd');
const memuset = r => require.ensure([], () => r(require('@/pages/memuset')), 'memuset');
const menuadd = r => require.ensure([], () => r(require('@/pages/menuadd')), 'menuadd');
const menuimage = r => require.ensure([], () => r(require('@/pages/menuimage')), 'menuimage');
const website = r => require.ensure([], () => r(require('@/pages/website')), 'website');
const webcookieclear = r => require.ensure([], () => r(require('@/pages/webcookieclear')), 'webcookieclear');
const webpwd = r => require.ensure([], () => r(require('@/pages/webpwd')), 'webpwd');
const about = r => require.ensure([], () => r(require('@/pages/about')), 'about');
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
        path: '/menu',
        component: menu,
        name: '',
        children: [{
            path: '/home',
            component: home,
            meta: [],
        }, {
            path: '/articlelist',
            component: articlelist,
            meta: ['内容管理', '文章列表'],
        },{
            path: '/articleadd',
            component: articleadd,
            meta: ['内容管理', '添加文章'],
        },
        {
            path: '/memuset',
            component: memuset,
            meta: ['模块栏目', '栏目设置'],
        },{
            path: '/menuadd',
            component: menuadd,
            meta: ['模块栏目', '添加栏目'],
        },
        {
            path: '/menuimage',
            component: menuimage,
            meta: ['模块栏目', '文件管理'],
        },
        {
            path: '/website',
            component: website,
            meta: ['设置', '站点管理'],
        },{
            path: '/webcookieclear',
            component: webcookieclear,
            meta: ['设置', '缓存管理'],
        },
        {
            path: '/webpwd',
            component: webpwd,
            meta: ['设置', '修改密码'],
        },
        {
            path: '/about',
            component: about,
            meta: ['关于', '关于'],
        }
        ]
    }]
})
