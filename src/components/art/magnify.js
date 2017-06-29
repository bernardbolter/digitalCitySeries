import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Magnify extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    console.log(this.props.toggleMagnify);
    const toggleMagnify = this.props.toggleMagnify;
    return (
      <svg className={toggleMagnify ? 'magnify-svg magnify-svg-on' : 'magnify-svg'} id="magnify-svg-button" height="25px" width="25px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
        <line id="magnify-svg-vertical-line" x1={14} y1={7} x2={14} y2={15} />
        <line id="magnify-svg-horizontal-line" x1={10} y1={11} x2={18} y2={11} />
        <line id="magnify-svg-handle-line" x1={9} y1={17} x2={4} y2={22} />
        <circle id="magnify-svg-circle" cx="14" cy="11" r="7" fill="transparent" />
      </svg>
    );
  }
}
