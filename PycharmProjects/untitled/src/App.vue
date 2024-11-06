<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.flex {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 60px;
}
</style>
