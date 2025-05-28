<template>
  <footer class="app-footer">
    <p>Footer Component</p>
  </footer>
</template>

<script setup>
// Footer component script
</script>

<style scoped>
.app-footer {
  background-color: var(--black);
  color: var(--white);
  padding: 1rem;
  text-align: center;
}

.app-footer p {
  margin: 0;
  font-size: 0.8rem;
}

.app-footer .footer-links {
  margin-top: 0.5rem;
}

.app-footer .footer-links a {
  color: var(--white);
  text-decoration: none;
  margin: 0 0.5rem;
}

.app-footer .footer-links a:hover {
  text-decoration: underline;
}
</style>
