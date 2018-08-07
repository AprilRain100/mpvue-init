import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '组件',
    usingComponents: {
      'i-alert': '../../../static/iview/alert/index',
      'i-toast': '../../../static/iview/toast/index',
      'i-button': '../../../static/iview/button/index',
    }
  }
}
