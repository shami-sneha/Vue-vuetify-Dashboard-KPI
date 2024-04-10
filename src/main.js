import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import ganttastic from '@infectoone/vue-ganttastic'


createApp(App)
.use(router)
.use(store)
.use(vuetify)
.use(ganttastic)
.mount('#app')


