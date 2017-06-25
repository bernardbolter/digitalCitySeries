import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class AllArt extends React.Component {

  componentDidMount() {
    this.props.artwork.loadArtwork();
  }

  render() {
    const { filter,
            filteredArt,
            artlist
          } = this.props.artwork;

    return (
      <section className="art">
        {this.loadGallery()}
      </section>
    );
  }

  loadGallery = () => {
    const artstore = this.props.artwork;
    if (artstore.isLoading) {
      return (
        <div className="allart-loading">
          <img src="./img/reload.gif" />
          <p>Loading Artwork...</p>
        </div>
      );
    } else {
      return (
        <div>
        {artstore.artlist.slice().map( art => (
            <div key={art.id} {...art}>
              <h1>{art.name}</h1>
              <h2>{art.contentLocation}</h2>
              <img src={art.imageMedium} alt={art.title.rendered} />
              <div>
                <img src={art.complementaryImageMedium} />
                <img src={art.secondComplementaryImageMedium} />
              </div>
            </div>
          ))
        }
        </div>
      );
    }
  }
}
