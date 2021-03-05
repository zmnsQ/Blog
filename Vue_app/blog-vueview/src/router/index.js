import Vue from 'vue'
import Router from 'vue-router'
import Article from '../pages/Article.vue'
import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
    routes:[
        {
            path:'/',
            redirect: '/index'
        },

        {
            path:  '/index',
            name: 'Home',
            component:  Home,
            meta: {
                auth: false
            }
        },
        {
          path: '/Article',
          name: 'Article',
          component: Article,
          meta:{
            auth:false
          }
        }
    ]
})
