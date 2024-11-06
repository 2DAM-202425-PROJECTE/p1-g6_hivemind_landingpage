<template>
  <Layout>
    <header id="home" class="header-container">
      <h1 class="title animate-fade-in">Benvingut al Meu Projecte</h1>
      <p class="subtitle">
        Descobreix la meva aplicació SPA amb Vue.js, dissenyada per oferir eines com una calculadora interactiva,
        integracions en temps real amb APIs, i més, en un format intuïtiu i eficient.
      </p>
    </header>

    <section id="features" class="features-container">
      <div class="feature-card">
        <h2 class="feature-title">Calculadora Interactiva</h2>
        <p class="feature-description">Una calculadora potent per fer càlculs ràpids amb funcionalitats senzilles i eficients.</p>
      </div>
      <div class="feature-card">
        <h2 class="feature-title">Integracions d'API</h2>
        <p class="feature-description">Integrat amb APIs en temps real per obtenir i mostrar dades dinàmiques.</p>
      </div>

    </section>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 1rem;
  margin: 3rem 0;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fade-in 1s ease-in-out;
}

.subtitle {
  font-size: 1.25rem;
  max-width: 50rem;
  margin: 0 auto;
  opacity: 0.9;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 4rem 1rem;
  text-align: center;
}

.feature-card {
  padding: 2rem;
  background-color: white;
  color: #1e3a8a; /* Dark blue text color */
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: scale(1.05);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-description {
  font-size: 1rem;
  opacity: 0.8;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>