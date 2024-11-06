<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li><router-link to="/">Inici</router-link></li>
      <li><router-link to="/calculator">Calculadora</router-link></li>
      <li><router-link to="/comments">Commentaris</router-link></li>
      <li><router-link to="/users">Usuaris</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
// No need for additional logic here
</script>

<style scoped>
.navbar {
  background-color: #2d3748; /* Background color for the navbar */
  color: white; /* Text color for navbar */
  padding: 1rem 0; /* Remove left and right padding */
  position: fixed; /* Fix the position */
  top: 0; /* Align to the top */
  width: 100%; /* Full width */
  z-index: 1000; /* Ensure navbar is above other content */
  left: 0; /* Align to the left edge */
}

.nav-links {
  list-style-type: none; /* Remove list styling */
  display: flex; /* Display links horizontally */
  justify-content: space-around; /* Space links evenly */
  margin: 0; /* Remove default margin */
  padding: 0 1rem; /* Add padding to the left and right */
}

.nav-links li {
  margin: 0 15px; /* Margin between links */
}

.nav-links a {
  text-decoration: none; /* Remove underline */
  color: white; /* Text color */
}
</style>