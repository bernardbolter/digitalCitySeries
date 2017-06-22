import { observable } from 'mobx';

class infoStore {
    @observable aboutButton = false;
    @observable closeAbout = false;
}

var information = new infoStore;

export default information;