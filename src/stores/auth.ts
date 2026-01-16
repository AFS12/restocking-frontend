import { defineStore } from 'pinia'
import { api } from '@/services/api'

export interface User {
  id: number
  name: string
  email: string
}

interface AuthState {
  user: User | null
  loading: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    loading: false,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    async fetchUser() {
      this.loading = true

      try {
        const response = await api.get<User>('/api/user')
        this.user = response.data
      } catch {
        this.user = null
      } finally {
        this.loading = false
      }
    },

    async login(email: string, password: string) {
      this.loading = true

      try {
        await api.get('/sanctum/csrf-cookie')

        await api.post('/login', {
          email,
          password,
        })

        await this.fetchUser()
      } finally {
        this.loading = false
      }
    },

    async logout() {
      this.loading = true

      try {
        await api.post('/logout')
        this.user = null
      } finally {
        this.loading = false
      }
    },
  },
})
