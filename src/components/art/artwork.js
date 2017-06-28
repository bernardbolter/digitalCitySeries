import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

import Draggable from 'react-draggable';

@observer
export default class Artwork extends React.Component {
  @observable toggleComposite = false;
  @observable toggleSatellite = false;
  @observable togglePhoto = false;

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
        <div className="artwork-composite" onClick={this.clickComposite}>
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
  }

  @action clickSatellite = () => {
    this.toggleSatellite = !this.toggleSatellite;
  }

  @action clickPhoto = () => {
    this.togglePhoto = !this.togglePhoto;
  }

  showComposite() {
    if (this.toggleComposite === false) {
      return (
        <img src={this.props.imageMedium} />
      );
    } else {
      return (
        <div className="composite-container">
          <Draggable>
            <img className="composite-draggable" src={this.props.image} />
          </Draggable>
        </div>
      );
    }

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
