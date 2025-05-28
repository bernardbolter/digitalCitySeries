<template>
  <div class="layout">
    <Header />
    <Info />
    <Art />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useArtStore } from '../store/artStore';
import Header from './header/Header.vue';
import Info from './info/Info.vue';
import Art from './art/Art.vue';
import Footer from './footer/Footer.vue';

const artStore = useArtStore();

onMounted(() => {
  artStore.loadArtwork();
  window.addEventListener('resize', artStore.updateWidthOfWindow);
  artStore.updateWidthOfWindow(); // Initial call
});

onUnmounted(() => {
  window.removeEventListener('resize', artStore.updateWidthOfWindow);
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
