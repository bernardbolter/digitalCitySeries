import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Artwork from './artwork';

import { allartData } from './artStore';

@observer
export default class AllArt extends React.Component {

  componentDidMount() {
    this.props.allartData.loadArtwork();
  }

  render() {
    const { filter,
            isLoading,
            artlist
          } = this.props.allartData;

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
            <Artwork key={art.id} {...art} artworkData = { allartData } />
          ))
        }
        </div>
      );
    }
  }
}
