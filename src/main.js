import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import api from './api'

const app = createApp(App)

app.config.globalProperties.$api = api

router.beforeEach((to, from) => {
  if (to.path !== 'login') {
    if (!localStorage.getItem('h5_token')) {
      return '/login'
    }
  }
})

app.use(router)
app.mount('#app')

//计算首屏的加载时间
window.onload = function () {
  //性能指标
  console.log(performance.timing.domComplete - performance.timing.navigationStart)
  const observer = new PerformanceObserver((list, obj) => {
    list.getEntries().forEach((entry) => {
      console.log(entry.domComplete)
    })
  })
  observer.observe({ entryTypes: ['navigation'] })
}
