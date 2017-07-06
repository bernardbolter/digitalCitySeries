import React from 'react';

import Header from './header/header';
import Info from './info/info';
import Art from './art/allart';
import Footer from './footer/footer';

import { storeData } from './store';

export default class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Info store = { storeData } />
        <Art store = { storeData } />
        <Footer />
      </div>
    );
  }
}
