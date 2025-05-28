import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const useArtStore = defineStore('art', () => {
  // State properties
  const artlist = ref([]);
  const isLoading = ref(true);
  const filter = ref('');
  const widthOfWindow = ref(window.innerWidth);
  const recentChecked = ref(false); // Assuming default based on MobX, adjust if needed
  const ogChecked = ref(false);
  const randomChecked = ref(false);
  const aboutSection = ref(false);
  const searchButton = ref(false);

  // Actions
  async function loadArtwork() {
    isLoading.value = true;
    try {
      const response = await axios.get('https://www.bernardbolter.com/artwork/wp-json/wp/v2/artwork?per_page=100');
      // The MobX store filters by series: 'dcs'. Let's assume 'series' is a custom field.
      // WordPress REST API by default doesn't filter custom fields directly in the URL like ?series=dcs
      // This filtering usually happens client-side or requires a custom endpoint.
      // For now, I'll fetch all and then filter, or assume 'artwork' endpoint implies 'dcs' series.
      // The MobX example implies client-side filtering from a larger list or a pre-filtered endpoint.
      // Given `artwork.series === "dcs"`, I will filter client-side.
      artlist.value = response.data.filter(artwork => artwork.acf && artwork.acf.series === 'dcs');
    } catch (error) {
      console.error('Failed to load artwork:', error);
      // Handle error appropriately, e.g., set an error state
    } finally {
      isLoading.value = false;
    }
  }

  function toggleAbout() {
    aboutSection.value = !aboutSection.value;
  }

  function toggleSearch() {
    searchButton.value = !searchButton.value;
    if (filteredArt.value.length === 0) {
      filter.value = ''; // Clear filter if no results after toggle, as per MobX logic
    }
  }

  function updateWidthOfWindow() {
    widthOfWindow.value = window.innerWidth;
  }

  // Getters (computed properties)
  const filteredArt = computed(() => {
    let works = artlist.value;

    if (filter.value) {
      works = works.filter(artwork =>
        artwork.title && artwork.title.rendered.toLowerCase().includes(filter.value.toLowerCase())
      );
    }

    if (ogChecked.value) {
      // The MobX store uses: `works.sort((a, b) => new Date(b.date) - new Date(a.date))`
      // then it reverses it if ogChecked is true. So oldest first.
      // However, the name 'ogChecked' often implies "original order" or "oldest goes first".
      // Let's assume 'ogChecked' means sort by date ascending (oldest first).
      // The MobX code `works.reverse()` after sorting by date descending means it sorts ascending.
      works = [...works].sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (randomChecked.value) {
      // Simple shuffle algorithm
      works = [...works].sort(() => Math.random() - 0.5);
    } else {
      // Default sort: The MobX store sorts by date descending if neither ogChecked nor randomChecked is true.
      // This is the default if recentChecked is true or no specific sort is selected.
      works = [...works].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    // recentChecked doesn't seem to directly influence sorting logic here other than being the default if others are false.
    // The MobX store implies recentChecked is true if ogChecked and randomChecked are false.

    return works;
  });

  return {
    artlist,
    isLoading,
    filter,
    widthOfWindow,
    recentChecked,
    ogChecked,
    randomChecked,
    aboutSection,
    searchButton,
    loadArtwork,
    toggleAbout,
    toggleSearch,
    updateWidthOfWindow,
    filteredArt,
  };
});
