<template>
  <h1>Auth Store</h1>

  <div v-if="auth.loading">Carregando...</div>

  <div v-if="auth.isAuthenticated">
    <p>Logado como {{ auth.user?.name }}</p>
    <button @click="auth.logout">Logout</button>
  </div>

  <div v-else>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="auth.login(email, password)">
      Login
    </button>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'Default',
  setup() {
    const auth = useAuthStore()
    return { auth }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>