import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from './directives'
import { componentPlugin } from './components'

//测试借口函数
// import {getCategory} from '@/apis/testAPI'
// getCategory().then(res =>{
//   console.log(res)
// })
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
