import React from 'react';
import DevTools from 'mobx-react-devtools';

import Hero from './hero/hero';
import Info from './info/info';
import Art from './art/allart';

import information from './info/infoStore';
import { allartData } from './art/artStore';

export default class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <Hero />
        <Info info = { information } />
        <Art allartData = { allartData } />
        <DevTools />
      </div>
    );
  }
}
