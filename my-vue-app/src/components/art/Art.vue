<template>
  <section class="app-art">
    <p>Art Component</p>
  </section>
</template>

<script setup>
// Art component script
</script>

<style scoped>
.app-art {
  padding: 1rem;
  text-align: center;
  flex-grow: 1; /* To make the main content area expand */
}

.art-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.art-gallery .art-item {
  border: 1px solid var(--grey);
  padding: 1rem;
  text-align: center;
}

.art-gallery .art-item img {
  max-width: 100%;
  height: auto;
}

.art-gallery .art-item p {
  font-size: 0.9rem;
  color: var(--darkgrey);
}

@media (min-width: 600px) { /* $tablet-portrait-up */
  .art-gallery {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
