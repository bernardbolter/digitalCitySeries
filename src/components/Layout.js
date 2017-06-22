import React from 'react';

import Hero from './hero/hero';
import Info from './info/info';
import Art from './art/art';

export default class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <Hero />
        <Info />
        <Nav />
        <Art />
      </div>
    );
  }
}
