import Vue from 'vue'
import App from './App.vue'



Vue.config.productionTip = false

new Vue({
  // render 函数中，渲染的是哪个 .vue 组件，那么这个组件就叫做 “根组件”
  render: h => h(App)
}).$mount('#app')
