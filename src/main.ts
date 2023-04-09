import { createApp } from 'vue'
import './assets/theme/main.scss'
import App from './App.vue'

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
