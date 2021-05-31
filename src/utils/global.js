import request from '@/api'
import enums from '@/const/enums/index'

export default {
  install(Vue) {
    Vue.prototype.$path = ''
    Vue.prototype.$request = request
    Vue.prototype.$enums = enums
  }
}