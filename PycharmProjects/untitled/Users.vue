<template>
  <Layout>
    <div class="container mx-auto p-6 max-w-2xl bg-gray-200 rounded-2xl shadow-xl mt-6">
      <h2 class="text-3xl font-extrabold mb-6 text-center text-gray-800">Usuaris</h2>
      <div v-if="loading" class="text-center text-lg">Loading...</div>
      <div v-else-if="error" class="text-center text-lg text-red-500">{{ error }}</div>
      <ul v-else class="space-y-4">
        <li v-for="user in users" :key="user.id" class="user-card">
          <h3 class="font-bold text-lg">{{ user.firstName }} {{ user.lastName }}</h3>
          <p>Email: {{ user.email }}</p>
          <p>Phone: {{ user.phone }}</p>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import Layout from './Layout.vue';

const users = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    users.value = response.data.users;
  } catch (e) {
    error.value = 'Failed to load users';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.container {
  max-width: 800px;
}

.user-card {
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.user-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

h2 {
  color: #1e40af;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
}

input:focus {
  outline: none;
  border-color: rgba(66, 153, 225, 0.6);
}
</style>