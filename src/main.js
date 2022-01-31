import { createApp, h } from 'vue'
import App from './App.vue'
import store from './api/store'

const app = createApp({
  setup() {},
  render() {
    return h(App)
  },
})
app.use(store).mount('#app')
