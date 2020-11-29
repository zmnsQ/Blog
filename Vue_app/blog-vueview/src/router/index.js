import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect: '/index'
        },

        {
            path:  '/index',
            name: 'Home',
            component:  resolve => require(['../pages/Home.vue'], resolve),
            meta: {
                auth: true
            }
        }
    ]
})