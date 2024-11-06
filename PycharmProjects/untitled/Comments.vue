<template>
  <Layout>
    <div class="container mx-auto p-6 max-w-2xl bg-gray-200 rounded-2xl shadow-xl mt-6">
      <h2 class="text-3xl font-extrabold mb-6 text-center text-gray-800">Comentaris</h2>
      <div v-if="loading" class="text-center text-lg">Loading...</div>
      <div v-else-if="error" class="text-center text-lg text-red-500">{{ error }}</div>
      <ul v-else class="space-y-4">
        <li v-for="comment in comments" :key="comment.id" class="comment-card">
          <h3 class="font-bold text-lg">{{ comment.name }}</h3>
          <p class="text-base">{{ comment.body }}</p>
          <p class="text-sm text-gray-500">{{ comment.email }}</p>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Layout from './Layout.vue';

const comments = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    comments.value = await response.json();
  } catch (e) {
    error.value = 'Failed to load comments';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.container {
  max-width: 800px;
}

.comment-card {
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.comment-card:hover {
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