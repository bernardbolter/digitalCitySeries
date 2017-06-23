import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import About from './about';
import SearchButton from './searchButton';

@observer
export default class Info extends React.Component {
    constructor() {
        super();
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
                <ReactCSSTransitionGroup transitionName="showAbout" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={true} transitionLeave={true} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                  {this.showAbout()}
                </ReactCSSTransitionGroup>
                <div className="nav-search-wrap">
                  <nav>
                      <a onClick={toggleAbout}>ABOUT</a>
                      <a href="#" id="navigation-prints">PRINTS</a>
                      <h5 id="navigation-email">email@bernardbolter.com</h5>
                  </nav>
                  <a
                    className={searchButton ? 'info-search info-search-on' : 'info-search'}
                    onClick={toggleSearch}
                  >
                    <SearchButton />
                    <input className="search-input filter" type="text" />
                  </a>
                </div>
            </section>
        );
    }

    showAbout() {
        if (this.props.info.aboutSection) {
          return <About />;
        }
    }
}
