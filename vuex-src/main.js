// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './_vuex/store'



Vue.config.productionTip = false //开发时，设置为false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//在根实例中配置store，为了在所有的组件里都可以通过 this.$store来获取相关的属性和方法
  template: '<App/>',
  components: { App }
})
