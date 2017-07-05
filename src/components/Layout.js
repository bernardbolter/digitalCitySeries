import React from 'react';
import DevTools from 'mobx-react-devtools';

import Header from './header/header';
import Info from './info/info';
import Art from './art/allart';

import { storeData } from './store';

export default class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Info store = { storeData } />
        <Art store = { storeData } />
        <DevTools />
      </div>
    );
  }
}
