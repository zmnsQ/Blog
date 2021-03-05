import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
Vue.use(ElementUI);
Vue.config.productionTip = false

axios.defaults.baseURL = "120.78.163.86"
axios.defaults.timeout = 3000

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
