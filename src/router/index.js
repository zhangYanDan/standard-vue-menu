import Vue from 'vue'
import Router from 'vue-router'
import example from '@/router/example'

Vue.use(Router)
let routes=[...example];  //es6扩展运算符 合并数组
export default new Router({
  routes: routes
})
