import { action, observable, computed } from 'mobx';
import { filter, shuffle } from 'lodash';
import axios from 'axios';

class Store {
  @observable artlist = [];
  @observable artSorted = [];
  @observable isLoading = true;
  @observable filter = '';
  @observable widthOfWindow = window.innerWidth;

  @observable recentChecked = true;
  @observable ogChecked = false;
  @observable randomChecked = false;

  @observable aboutSection = false;
  @observable searchButton = false;

  @action loadArtwork() {
    this.isLoading = true;
    axios.get('http://artwork.bernardbolter.com/wp-json/wp/v2/artwork?per_page=100')
      .then(results =>  {
        this.artlist = _.filter(results.data, {series: 'dcs'});
        console.log(this.artlist);
        this.isLoading = false;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  @computed get filteredArt() {
    const matchesFilter = new RegExp(this.filter, 'i');
    let artworkFiltered = this.artlist.filter(art => !this.filter || matchesFilter.test(art.title.rendered));

    this.artSorted = artworkFiltered;
    console.log(this.artSorted);

    // if (this.ogChecked == true) {
    //   artworkSorted = artworkFiltered.reverse();
    // } else if (this.randomChecked == true) {
    //   artworkSorted = _.shuffle(artworkFiltered);
    // } else {
    //   artworkSorted = artworkFiltered;
    // }
  }

  @action toggleAbout = () => {
    this.aboutSection = !this.aboutSection;
  }

  @action toggleSearch = () => {
    this.searchButton = !this.searchButton;
  }
}

export var storeData = new Store;
