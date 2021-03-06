import { action, observable, computed } from 'mobx';
import { filter, shuffle, isEmpty } from 'lodash';
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
    axios.get('https://www.bernardbolter.com/artwork/wp-json/wp/v2/artwork?per_page=100')
      .then(results =>  {
        this.artlist = _.filter(results.data, {series: 'dcs'});
        console.log(results.data);
        this.isLoading = false;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  @computed get filteredArt() {
    const matchesFilter = new RegExp(this.filter, 'i');
    let artworkFiltered = this.artlist.filter(art => !this.filter || matchesFilter.test(art.title.rendered));
    let artworkSorted = [];

    if (this.ogChecked == true) {
      artworkSorted = artworkFiltered.reverse();
    } else if (this.randomChecked == true) {
      artworkSorted = _.shuffle(artworkFiltered);
    } else {
      artworkSorted = artworkFiltered;
    }

    return artworkSorted;
  }

  @action toggleAbout = () => {
    this.aboutSection = !this.aboutSection;
  }

  @action toggleSearch = () => {
    this.searchButton = !this.searchButton;
    console.log('search click');
    if (_.isEmpty(this.filteredArt)) {
      this.filter = '';
    }
  }
}

export var storeData = new Store;
