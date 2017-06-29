import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

import Draggable from 'react-draggable';

import Magnify from './magnify';
import { allartData } from './artStore';

@observer
export default class Artwork extends React.Component {
  @observable toggleComposite = false;
  @observable toggleSatellite = false;
  @observable togglePhoto = false;
  @observable toggleMagnify = false;
  @observable largeCompositeLoaded = false;

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
        <div className="artwork-composite">
          <div className="magnify-button" onClick={this.clickComposite}>
            <Magnify toggleMagnify = { this.toggleMagnify }/>
          </div>
          {this.showComposite()}
        </div>
        <div className="artwork-extras">
          <div className="artwork-satellite" onClick={this.clickSatellite}>
            {this.showSatellite()}
          </div>
          <div className="artwork-photo" onClick={this.clickPhoto}>
            {this.showPhoto()}
          </div>
        </div>
      </section>
    );
  }

  @action clickComposite = () => {
    this.toggleComposite = !this.toggleComposite;
    this.toggleSatellite = false;
    this.togglePhoto = false;
    this.toggleMagnify = !this.toggleMagnify;
    if (this.largeCompositeLoaded === true) {
      this.largeCompositeLoaded = false;
    }
  }

  @action clickSatellite = () => {
    this.toggleSatellite = !this.toggleSatellite;
    this.toggleComposite = false;
    this.togglePhoto = false;
  }

  @action clickPhoto = () => {
    this.togglePhoto = !this.togglePhoto;
    this.toggleComposite = false;
    this.toggleSatellite = false;
  }

  showComposite() {
    if (this.toggleComposite === false) {
      return (
        <img draggable="false" src={this.props.imageMedium} />
      );
    } else {
      return (
        <div className={this.largeCompositeLoaded ? 'composite-container composite-container-loading' : 'composite-container'}>
          {!this.largeCompositeLoaded ? <p>large composite loading...</p> : null }
          <Draggable   bounds={{left: -250, right: 250, top: -250, bottom: 250}} >
            <img
              draggable="false"
              className={this.largeCompositeLoaded ? 'composite-draggable composite-draggable-loaded' : 'composite-draggable'}
              onLoad={this.handleImageLoaded}
              src={this.props.image}
            />
          </Draggable>
        </div>
      );
    }
  }

  handleImageLoaded = () => {
    console.log('imageloaded');
    this.largeCompositeLoaded = !this.largeCompositeLoaded;
  }

  showSatellite() {
    if (this.toggleSatellite === false ) {
      return (
        <img src={this.props.complementaryImageMedium} />
      );
    } else {
      return (
        <img src={this.props.secondComplementaryImageMedium} />
      );
    }

  }
  showPhoto() {
    if (this.togglePhoto === false ) {
      return (
        <img src={this.props.secondComplementaryImageMedium} />
      );
    } else {
      return (
        <img src={this.props.imageMedium} />
      );
    }
  }
}
