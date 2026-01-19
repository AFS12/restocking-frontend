import { defineStore } from 'pinia'

export type Theme = 'light' | 'dark'

interface ThemeState {
  theme: Theme
  initialized: boolean
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    theme: 'light',
    initialized: false,
  }),

  getters: {
    isDark: (state) => state.theme === 'dark',
  },

  actions: {
    applyTheme(theme: Theme) {
      this.theme = theme
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    },

    toggleTheme() {
      const nextTheme: Theme = this.theme === 'light' ? 'dark' : 'light'
      this.applyTheme(nextTheme)
    },

    initTheme() {
      if (this.initialized) return

      const savedTheme = localStorage.getItem('theme') as Theme | null

      if (savedTheme) {
        this.applyTheme(savedTheme)
      } else {
        const prefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches

        this.applyTheme(prefersDark ? 'dark' : 'light')
      }

      this.initialized = true
    },
  },
})
