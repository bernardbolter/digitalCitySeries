import React from 'react';
import { action, observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

import Magnify from './magnify';
import Image from './image';

import { allartData } from './artStore';

@observer
export default class Artwork extends React.Component {
  @observable selectArtworkView = 'composite';
  @observable fadeOut = false;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="artwork">
        <div className="artwork-header">
          <h1>{this.props.name}</h1>
          <h2>{this.props.contentLocation}</h2>
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
          <Magnify toggleMagnify="minus" />
        </div>
      );
    } else if (this.selectArtworkView == 'magnify') {
        return (
          <div className="magnify-button" onClick={this.clickComposite}>
            <Magnify toggleMagnify="plus" />
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
      this.selectArtworkView = 'magnify';
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

  showComposite = () => {
    if (this.selectArtworkView == 'composite') {
      return (
        <Image image={this.props.imageMedium } dragOn={false} />
      );
    } else if (this.selectArtworkView == 'magnify') {
      return (
        <Image image={this.props.image} dragOn={true} />
      );
    } else if (this.selectArtworkView == 'satellite') {
      return (
        <Image image={this.props.complementaryImage} dragOn={false} />
      );
    } else if (this.selectArtworkView == 'photo') {
      return (
        <Image image = { this.props.secondComplementaryImage } dragOn={false}/>
      );
    }
  }

  showSatellite = () => {
    if (this.selectArtworkView == 'composite') {
      return (
        <div className="artwork-satellite" onClick={this.clickSatellite}>
          <Image image={this.props.complementaryImageMedium} dragOn={false} />
        </div>
      );
    } else if (this.selectArtworkView == 'magnify') {
      return (
        <div>Composite Info</div>
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
          <Image image = { this.props.secondComplementaryImageMedium } dragOn={false}/>
        </div>
      );
    } else if (this.selectArtworkView == 'magnify') {
      return (
        <div className="artwork-photo" onClick={this.clickComposite}>
          <Image image={this.props.thumbnailUrl } dragOn={false} />
        </div>
      );
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
