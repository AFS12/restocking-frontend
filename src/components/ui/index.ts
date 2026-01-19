import type { App } from 'vue'

import Button from './Button.vue'
import TextField from './TextField.vue'

export function registerGlobalComponents(app: App) {
  app.component('Button', Button)
  app.component('TextField', TextField)
}