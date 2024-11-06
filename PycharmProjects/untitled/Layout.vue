<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-indigo-700 via-purple-700 to-blue-900 text-white">
    <!-- Main Content -->
    <main class="flex-grow">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="mt-auto py-6 bg-blue-800">
      <div class="container mx-auto text-center text-sm opacity-80">
      </div>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>