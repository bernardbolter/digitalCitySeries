import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

import Draggable from 'react-draggable';
import Magnify from './magnify';
import Image from './image';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';

import { allartData } from './artStore';

@observer
export default class Artwork extends React.Component {
  @observable toggleArtworkView = "composite";

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
            <img src={this.props.complementaryImageMedium} />
          </div>
          <div className="artwork-photo" onClick={this.clickPhoto}>
            <img src={this.props.secondComplementaryImageMedium} />
          </div>
        </div>
      </section>
    );
  }

  @action clickComposite = () => {
    // if (this.toggleArtworkView = 'default') {
    //   this.toggleArtworkView ='composite';
    // } else {
    //   this.toggleArtworkView = 'default';
    // }
    this.toggleArtworkView = 'default' ? this.toggleArtworkView ='composite' : this.toggleArtworkView = 'default';
    this.toggleMagnify = !this.toggleMagnify;
    console.log(this.toggleArtworkView);
  }

  @action clickSatellite = () => {
    this.toggleArtworkView = "satellite";
    console.log(this.toggleArtworkView);
  }

  @action clickPhoto = () => {
    this.toggleArtworkView = "photo";
    console.log(this.toggleArtworkView);
  }

  showComposite() {
    switch(this.toggleArtworkView) {
      case 'composite':
        return (

        <div className="composite-container">
          <Image image={this.props.image} id={this.props.id}/>
        </div>
              );
      case 'satellite':
        return <img draggable="false" src={ this.props.complementaryImageMedium } />;
      // case 'photo':
      //   return <Image draggable="false" image = { this.props.secondComplementaryImageMedium } />;
      default:
        return null;
      } // end switch
    } // end showComposite
  }

//   showSatellite() {
//     switch(this.toggleArtworkView) {
//       case
//
//
//
//
//     if (this.toggleSatellite === false ) {
//       return (
//         <Image image = {this.props.complementaryImageMedium} />
//       );
//     } else {
//       return (
//         <img src={this.props.secondComplementaryImageMedium} />
//       );
//     }
//
//   }
//   showPhoto() {
//     if (this.togglePhoto === false ) {
//       return (
//         <img src={this.props.secondComplementaryImageMedium} />
//       );
//     } else {
//       return (
//         <img src={this.props.imageMedium} />
//       );
//     }
//   }
// }
