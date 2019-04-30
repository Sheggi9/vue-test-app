import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/pages/mainPage'
import articles from '@/components/pages/articles'
import contact from '@/components/pages/contact'
import usersList from '@/components/pages/usersList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/users-list',
      name: 'usersList',
      component: usersList
    }
  ],
  mode: 'history'
})
