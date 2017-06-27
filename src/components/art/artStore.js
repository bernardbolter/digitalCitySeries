import mobx, { action, computed, observable, extendObservable, asMap } from 'mobx';
import { filter } from 'lodash';
import axios from 'axios';

class artStore {
  @observable artlist = [];
  @observable isLoading = true;
  @observable filter = '';

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

  @action artworkState(id) {
    let comp = `compositeOn_${id}`;
    console.log(comp);
    let photo = `photoOn_${id}`;
    // this.artworkStateObject.set(photo, false);
    // this.artworkStateObject.set(photo, false);
    // this.artworkStateObject.set(comp, false);
  }
}

const artworkStateObject = observable([]);

export artworkStateObject

var artworkData = new artStore;

export default artworkData;
