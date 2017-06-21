import React from 'react';

import Hero from './hero/hero_entry';
import Info from './info/info_entry';
import Nav from './nav/nav_entry';
import Art from './art/art_entry';

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
