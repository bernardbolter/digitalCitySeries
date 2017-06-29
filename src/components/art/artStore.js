import { action, observable } from 'mobx';
import { filter } from 'lodash';
import axios from 'axios';

class artStore {
  @observable artlist = [];
  @observable isLoading = true;
  @observable filter = '';
  @observable magnifyButton = false;

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
}

export var allartData = new artStore;
