import React from 'react';

import Hero from './hero/hero';
import Info from './info/info';
import Art from './art/art';

import information from './info/infoStore';
import artwork from './art/artStore';

export default class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <Hero />
        <Info info = { information }/>
        <Art artwork = { artwork }/>
      </div>
    );
  }
}
