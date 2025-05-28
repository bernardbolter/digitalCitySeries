<template>
  <section class="app-info">
    <!-- Placeholder for general info content if any, e.g., title -->
    <div class="info-header">
      <h2 class="info-title">Artwork Information & Tools</h2>
      <!-- Buttons to toggle About and Search/Sort sections -->
      <button @click="artStore.toggleAbout()">
        {{ artStore.aboutSection ? 'Hide' : 'Show' }} About
      </button>
      <button @click="artStore.toggleSearch()">
        {{ artStore.searchButton ? 'Hide' : 'Show' }} Search/Sort
      </button>
    </div>

    <!-- About Section with Transition -->
    <Transition name="fade-slide">
      <div v-if="artStore.aboutSection" class="about-content info-text">
        <p>This is the about section. It can contain details about the artist or the artwork collection.</p>
        <p class="info-highlight">Highlighted info here!</p>
      </div>
    </Transition>

    <!-- Search/Sort UI Section with Transition -->
    <Transition name="fade-slide">
      <div v-if="artStore.searchButton" class="search-sort-content">
        <h3 class="info-subtitle">Search & Sort</h3>
        <input type="text" placeholder="Search artwork by title..." v-model="artStore.filter" class="search-input"/>
        <div class="sort-options">
          <label>
            <input type="checkbox" v-model="artStore.recentChecked" @change="handleSortChange('recent')"/> Recent First
          </label>
          <label>
            <input type="checkbox" v-model="artStore.ogChecked" @change="handleSortChange('og')"/> Oldest First (OG)
          </label>
          <label>
            <input type="checkbox" v-model="artStore.randomChecked" @change="handleSortChange('random')"/> Random Order
          </label>
        </div>
      </div>
    </Transition>

  </section>
</template>

<script setup>
import { useArtStore } from '../../store/artStore';

const artStore = useArtStore();

// Handle changes in sort checkboxes to ensure only one is active or a default
const handleSortChange = (changedSort) => {
  if (changedSort === 'recent') {
    if (artStore.recentChecked) {
      artStore.ogChecked = false;
      artStore.randomChecked = false;
    } else if (!artStore.ogChecked && !artStore.randomChecked) {
      // Prevent unchecking if it's the only one, or enforce a default
      artStore.recentChecked = true; // Re-check it, or set a default
    }
  } else if (changedSort === 'og') {
    if (artStore.ogChecked) {
      artStore.recentChecked = false;
      artStore.randomChecked = false;
    } else if (!artStore.recentChecked && !artStore.randomChecked) {
      artStore.recentChecked = true; // Default to recent if unchecking OG and others are false
    }
  } else if (changedSort === 'random') {
    if (artStore.randomChecked) {
      artStore.recentChecked = false;
      artStore.ogChecked = false;
    } else if (!artStore.recentChecked && !artStore.ogChecked) {
      artStore.recentChecked = true; // Default to recent if unchecking Random and others are false
    }
  }
  // If all are unchecked by some means, default to recentChecked
  if (!artStore.recentChecked && !artStore.ogChecked && !artStore.randomChecked) {
    artStore.recentChecked = true;
  }
};

// Initialize sort state if needed (e.g. ensure one is checked)
if (!artStore.recentChecked && !artStore.ogChecked && !artStore.randomChecked) {
  artStore.recentChecked = true;
}
</script>

<style scoped>
.app-info {
  padding: 2rem;
  background-color: var(--background);
}

.info-header {
  margin-bottom: 1.5rem;
  text-align: left;
}

.info-header button {
  margin-right: 0.5rem;
  padding: 0.5em 1em;
  background-color: var(--blue);
  color: var(--white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.info-header button:hover {
  opacity: 0.9;
}

.app-info .info-title { /* Original style */
  font-size: 1.8rem;
  color: var(--blue);
  margin-bottom: 1rem;
  /* text-align: left; already set by .info-header */
}

.app-info .info-text { /* Original style */
  font-size: 1rem;
  line-height: 1.6;
  color: var(--black);
  text-align: left;
  margin-top: 1rem;
}

.app-info .info-highlight { /* Original style */
  background-color: var(--blue);
  color: var(--white);
  padding: 0.5rem;
  border-radius: 4px;
  display: inline-block;
  margin-top: 0.5rem;
}

.search-sort-content {
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--grey);
  border-radius: 4px;
  text-align: left;
}

.info-subtitle {
  font-size: 1.4rem;
  color: var(--blue);
  margin-bottom: 0.75rem;
}

.search-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid var(--grey);
  border-radius: 4px;
  box-sizing: border-box;
}

.sort-options label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--black);
}
.sort-options input {
  margin-right: 0.5rem;
}

/* Transition styles for fade-slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (min-width: 1200px) { /* $desktop-up - Original media query */
  .app-info {
    padding: 3rem;
  }
  .app-info .info-title {
    font-size: 2.2rem;
  }
}
</style>
