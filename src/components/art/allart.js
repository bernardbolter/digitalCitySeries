import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import Artwork from './artwork';

import { storeData } from '../store';
import ReactResizeDetector from 'react-resize-detector';

@observer
export default class AllArt extends React.Component {

  componentDidMount() {
    this.props.store.loadArtwork();
    console.log(this.props.store.artlist);
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
        <div className="allart-loading">
          <img src="./img/reload.gif" />
          <p>Loading Artwork...</p>
        </div>
      );
    } else {
      return (
        <div>
        {this.props.store.artlist.slice().map( art => (
            <Artwork key={art.id} {...art} />
          ))
        }
        </div>
      );
    }
  }
}
