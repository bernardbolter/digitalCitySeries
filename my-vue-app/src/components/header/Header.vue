<template>
  <header class="app-header">
    <p>Header Component</p>
  </header>
</template>

<script setup>
// Header component script
</script>

<style scoped>
.app-header {
  background-color: var(--blue);
  color: var(--white);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header .logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.app-header nav a {
  color: var(--white);
  margin: 0 0.5rem;
  text-decoration: none;
}

.app-header nav a:hover {
  text-decoration: underline;
}

@media (max-width: 321px) { /* $phone-up */
  .app-header {
    flex-direction: column;
  }
  .app-header nav {
    margin-top: 0.5rem;
  }
}
</style>
