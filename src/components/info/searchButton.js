import React, { Component } from 'react';

export default class SearchButton extends React.Component {
  render() {
    return (
      <svg id="search-button" height="50px" width="50px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <line id="search-left-line" x1={18} y1={18} x2={32} y2={32} />
        <line id="search-right-line" x1={32} y1={18} x2={18} y2={32} />
        <circle id="search-circle" cx="25" cy="25" r="15" fill="transparent" />
      </svg>
    );
  }
}
