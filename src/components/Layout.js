import React from 'react';

import Hero from './hero/hero';
import Info from './info/info';
import Art from './art/allart';

import information from './info/infoStore';
import artworkData from './art/artStore';

export default class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <Hero />
        <Info info = { information } />
        <Art artworkData = { artworkData } />
      </div>
    );
  }
}
