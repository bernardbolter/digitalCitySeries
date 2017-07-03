import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import Artwork from './artwork';

import { allartData } from './artStore';
import ReactResizeDetector from 'react-resize-detector';

@observer
export default class AllArt extends React.Component {

  componentDidMount() {
    this.props.allartData.loadArtwork();
  }

  render() {
    return (
      <section className="art">
        {this.loadGallery()}
      </section>
    );
  }

  loadGallery = () => {
    if (this.props.allartData.isLoading) {
      return (
        <div className="allart-loading">
          <img src="./img/reload.gif" />
          <p>Loading Artwork...</p>
        </div>
      );
    } else {
      return (
        <div>
        {this.props.allartData.artlist.slice().map( art => (
            <Artwork key={art.id} {...art} />
          ))
        }
        </div>
      );
    }
  }
}
