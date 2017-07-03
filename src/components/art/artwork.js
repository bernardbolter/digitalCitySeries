import React from 'react';
import { action, observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

import Magnify from './magnify';
import Image from './image';

@observer
export default class Artwork extends React.Component {
  @observable selectArtworkView = 'composite';
  @observable fadeOut = false;
  @observable fadeRaw = false;
  @observable toggleMagnify = false;

  @observable imageSources = {
    image: this.props.image,
    imageMedium: this.props.imageMedium,
    imageLarge: this.props.imageLarge,
    complementaryImage: this.props.complementaryImage,
    complementaryImageMedium: this.props.complementaryImageMedium,
    complementaryImageLarge: this.props.complementaryImageLarge,
    secondComplementaryImage: this.props.secondComplementaryImage,
    secondComplementaryImageMedium: this.props.secondComplementaryImageMedium,
    secondComplementaryImageLarge: this.props.secondComplementaryImageLarge,
    rawImage: this.props.printURL
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="artwork">
        <div className="artwork-header">
          <div className="artwork-title">
            <h1>{this.props.name}</h1>
            <h2>{this.props.contentLocation}</h2>
          </div>
          <img src={(this.props.url ? this.props.url : null)} />
        </div>
        <div className="artwork-container">
          <div className={this.fadeOut ? 'artwork-composite artwork-composite-fade' : 'artwork-composite'}>
            {this.showMagnify()}
            {this.showComposite()}
          </div>
          <div className={this.fadeOut ? 'artwork-extras artwork-extras-fade' : 'artwork-extras'}>
            {this.showSatellite()}
            {this.showPhoto()}
          </div>
        </div>
      </section>
    );
  }

  showMagnify = () => {
    if (this.selectArtworkView == 'composite') {
      return (
        <div className="magnify-button" onClick={this.clickMagnify}>
          <Magnify toggleMagnify={this.toggleMagnify} />
        </div>
      );
    } else if (this.selectArtworkView == 'magnify') {
        return (
          <div className="magnify-button" onClick={this.clickMagnify}>
            <Magnify toggleMagnify={this.toggleMagnify} />
          </div>
        );
    } else {
      null;
    }
  }

  @action clickComposite = () => {
    this.fadeOut = true;
    setTimeout(() => {
      this.selectArtworkView = 'composite';
      this.fadeOut = false;
    }, 500);
  }

  @action clickMagnify = () => {
    this.fadeOut = true;
    setTimeout(() => {
      if (this.toggleMagnify === false) {
      this.selectArtworkView = 'magnify';
      this.toggleMagnify = true;
      } else {
      this.selectArtworkView = 'composite';
      this.toggleMagnify = false;
      }
      this.fadeOut = false;
    }, 500);
  }

  @action clickSatellite = () => {
    this.fadeOut = true;
    setTimeout(() => {
      this.selectArtworkView = 'satellite';
      this.fadeOut = false;
    }, 500);
  }

  @action clickPhoto = () => {
    this.fadeOut = true;
    setTimeout(() => {
      this.selectArtworkView = 'photo';
      this.fadeOut = false;
    }, 500);
  }

  @action clickRaw = () => {
    this.fadeRaw = !this.fadeRaw;
  }

  showComposite = () => {
    if (this.selectArtworkView == 'composite') {
      return (
        <Image imageSRC={this.imageSources} dragOn={false} view="composite-composite" />
      );
    } else if (this.selectArtworkView == 'magnify') {
      return (
        <Image imageSRC={this.imageSources} dragOn={true} view="composite-magnify" />
      );
    } else if (this.selectArtworkView == 'satellite') {
      return (
        <Image imageSRC={this.imageSources} dragOn={false} view="composite-satellite" />
      );
    } else if (this.selectArtworkView == 'photo') {
      return (
        <Image imageSRC={this.imageSources} dragOn={false} view="composite-photo" />
      );
    }
  }

  showSatellite = () => {
    if (this.selectArtworkView == 'composite') {
      return (
        <div className="artwork-satellite" onClick={this.clickSatellite}>
          <Image imageSRC={this.imageSources} dragOn={false} view="satellite" />
        </div>
      );
    } else if (this.selectArtworkView == 'magnify') {
      return (
        <div className={this.props.printURL ? 'artwork-composite-info' : 'artwork-composite-info artwork-composite-full'}>
          <h1>Composite City Portrait</h1>
          <h2>48" x 48" | {this.props.dateCreated}</h2>
          <h3>edition of 3</h3>
          <h4>{this.props.contributor} of 3 available</h4>
          <h4>$1000</h4>
        </div>
      );
    }else if (this.selectArtworkView == 'satellite') {
      return (
        <div onClick={this.clickComposite}>Close Satellite</div>
      );
    } else if (this.selectArtworkView == 'photo') {
      return (
        <div>Photo Info</div>
      );
    }
  }

  showPhoto = () => {
    if (this.selectArtworkView == 'composite') {
      return (
        <div className="artwork-photo" onClick={this.clickPhoto}>
          <Image imageSRC={this.imageSources} dragOn={false} view="photo" />
        </div>
      );
    } else if (this.selectArtworkView == 'magnify') {
        if (this.props.printURL) {
          return (
            <div className={this.fadeRaw ? 'artwork-raw artwork-raw-on' : 'artwork-raw'} onClick={this.clickRaw}>
              <Image imageSRC={this.imageSources} dragOn={false} view="raw" />
            </div>
          );
        } else {
          return (
            null
          );
        }
    } else if (this.selectArtworkView == 'satellite') {
      return (
        <div>City Information</div>
      );
    } else if (this.selectArtworkView == 'photo') {
      return (
        <div onClick={this.clickComposite}>Close Photo</div>
      );
    }
  }

}
