import './main.scss'
import App from './App.vue'
import { registerGlobalComponents } from './components/ui'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from './stores/theme'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const authStore = useAuthStore()
await authStore.fetchUser()

registerGlobalComponents(app)

const themeStore = useThemeStore()
themeStore.initTheme()

app.mount('#app')