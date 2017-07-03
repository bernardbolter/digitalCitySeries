import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Magnify extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <svg className={this.props.toggleMagnify ? 'magnify-svg magnify-svg-on' : 'magnify-svg'} id="magnify-svg-button" height="40px" width="40px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <line id="magnify-svg-vertical-line" x1={24} y1={12} x2={24} y2={22} />
        <line id="magnify-svg-horizontal-line" x1={19} y1={17} x2={29} y2={17} />
        <line id="magnify-svg-handle-line" x1={17} y1={23} x2={8} y2={32} />
        <circle id="magnify-svg-circle" cx="24" cy="17" r="10" fill="transparent" />
      </svg>
    );
  }
}
