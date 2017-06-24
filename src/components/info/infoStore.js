import { action, observable } from 'mobx';

class infoStore {
    @observable aboutSection = false;
    @observable searchButton = false;

    @action toggleAbout = () => {
      this.aboutSection = !this.aboutSection;
    }

    @action toggleSearch = () => {
      this.searchButton = !this.searchButton;
    }
}

var information = new infoStore;

export default information;
