import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { isEmpty } from 'lodash';

import Artwork from './artwork';

import { storeData } from '../store';
import ReactResizeDetector from 'react-resize-detector';

@observer
export default class AllArt extends React.Component {

  componentDidMount() {
    this.props.store.loadArtwork();
    console.log(this.props);
  }

  render() {
    return (
      <section className="art">
        {this.loadGallery()}
      </section>
    );
  }

  loadGallery = () => {
    if (this.props.store.isLoading) {
      return (
        <div className="artwork-loading">
          <img src="http://bernardbolter.com/artwork/wp-content/uploads/square-loader.gif" />
          <p>Loading Artwork...</p>
        </div>
      );
    } else {
      if (_.isEmpty(this.props.store.filteredArt)) {
        return (
          <div className="no-artwork">
            <h3>No results found from your search of {this.props.store.filter}</h3>
          </div>
        );
      } else {
        return (
          <div>
          {this.props.store.filteredArt.slice().map( art => (
              <Artwork key={art.id} {...art} />
            ))
          }
          </div>
        );
      }
    }
  }
}
