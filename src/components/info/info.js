import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Motion, spring, presets } from 'react-motion';
import {ReactHeight} from 'react-height';

import About from './about';
import SearchButton from './searchButton';

import information from './infoStore';

@observer
export default class Info extends React.Component {
    constructor() {
        super();
        this.state = { height: 0 };
    }

    render() {
      const { aboutSection,
              toggleAbout,
              searchButton,
              toggleSearch
            } = this.props.info;

        return (
            <section className="info">
                <h2 id="tagline">Composite City Portraits</h2>
                <h3 id="name">by Bernard Bolter</h3>
                  <Motion style={{x: spring(aboutSection ? this.state.height : 0, [ 80, 3 ])}}>
                    {({x}) =>
                    <div style={Object.assign({}, {
                        maxHeight: x
                      })}>
                      <ReactHeight onHeightReady={value => this.setState({height: value})}>
                        <About />
                      </ReactHeight>
                    </div>
                    }
                  </Motion>

                <div className="nav-search-wrap">
                  <nav>
                      <a className={aboutSection ? 'about-btn about-btn-on' : 'about-btn'} onClick={toggleAbout}>{aboutSection ? 'CLOSE' : 'ABOUT'}</a>
                      <a href="#" id="navigation-prints">PRINTS</a>
                      <h5 id="navigation-email">email@bernardbolter.com</h5>
                  </nav>
                  <div className="search">
                    <input className={searchButton ? 'search-input search-input-on filter' : 'search-input filter'} type="text" />
                    <a
                      className={searchButton ? 'search-button search-button-on' : 'search-button'}
                      onClick={toggleSearch}
                    >
                      <SearchButton info = { information }/>
                    </a>
                  </div>
                </div>
            </section>
        );
    }
}
