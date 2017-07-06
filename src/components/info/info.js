import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Motion, spring, presets } from 'react-motion';
import {ReactHeight} from 'react-height';

import About from './about';
import SearchButton from './searchButton';

import { storeData } from '../store';

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
              toggleSearch,
              filter,
              recentChecked,
              ogChecked,
              randomChecked
            } = this.props.store;

        return (
            <section className="info">
              <div className="info-header-text">
                <h2 id="tagline">Composite City Portraits</h2>
                <h3 id="name">by Bernard Bolter</h3>
              </div>
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
                      <a className={aboutSection ? 'about-btn about-btn-on' : 'about-btn'} onClick={toggleAbout}>{aboutSection ? 'CLOSE ABOUT' : 'ABOUT'}</a>

                      <h5 id="navigation-email" className={searchButton ? 'email email-on' : 'email'}>email@bernardbolter.com</h5>
                  </nav>
                  <div className="search">
                    <input className={searchButton ? 'search-input search-input-on filter' : 'search-input filter'} type="text" value={filter} onChange={this.goFilter} />

                    <div className={searchButton ? 'sort sort-on' : 'sort'}>
                      <p>sort by |</p>
                      <div className="sort-boxes">
                        <label htmlFor="recent" className="sort-label check-recent">
                          <input type="checkbox" id="recent" value="recent" checked={recentChecked} onChange={this.toggleSorting} />
                            <span>most recent </span>
                        </label>
                        <label htmlFor="og" className="sort-label check-og">
                          <input type="checkbox" id="og" value="og" checked={ogChecked} onChange={this.toggleSorting} />
                            <span>most og </span>
                        </label>
                        <label htmlFor="random" className="sort-label check-random">
                          <input type="checkbox" id="random" value="random" checked={randomChecked} onChange={this.toggleSorting} />
                            <span>random </span>
                        </label>
                      </div>
                    </div>

                    <a
                      className={searchButton ? 'search-button search-button-on' : 'search-button'}
                      onClick={toggleSearch}
                    >
                      <SearchButton store = { storeData }/>
                    </a>
                  </div>
                </div>
            </section>
        );
    }

    goFilter = (e) => {
      this.props.store.filter = e.target.value;
    }

    toggleSorting = (e) => {
      switch (e.target.value) {
      case 'recent':
        this.props.store.recentChecked = true;
        this.props.store.ogChecked = false;
        this.props.store.randomChecked = false;
        break;
      case 'og':
        this.props.store.recentChecked = false;
        this.props.store.ogChecked = true;
        this.props.store.randomChecked = false;
        break;
      case 'random':
        this.props.store.recentChecked = false;
        this.props.store.ogChecked = false;
        this.props.store.randomChecked = true;
        break;
      }
    }
}
