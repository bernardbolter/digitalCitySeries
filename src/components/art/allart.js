import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Artwork from './artwork';

import artworkData from './artStore';

@observer
export default class AllArt extends React.Component {

  componentDidMount() {
    this.props.artworkData.loadArtwork();
  }

  render() {
    const { filter,
            filteredArt,
            artlist,
            artworkState,
            artworkStateArray
          } = this.props.artworkData;

    return (
      <section className="art">
        {this.loadGallery()}
      </section>
    );
  }

  loadGallery = () => {
    const allartData = this.props.artworkData;
    if (allartData.isLoading) {
      return (
        <div className="allart-loading">
          <img src="./img/reload.gif" />
          <p>Loading Artwork...</p>
        </div>
      );
    } else {
      return (
        <div>
        {allartData.artlist.slice().map( art => (

            <Artwork key={art.id} {...art} artworkData = { artworkData } />

          ))
        }
        </div>
      );
    }
  }
}
