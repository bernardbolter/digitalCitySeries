import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class CloseButton extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <svg className={this.props.toggleCloseButton ? 'close-button-svg close-button-svg-on' : 'close-button-svg'} id="close-button-svg-button" height="40px" width="40px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <line id="close-button-svg-cross-one" x1={15} y1={25} x2={25} y2={15} />
        <line id="close-button-svg-cross-two" x1={25} y1={25} x2={15} y2={15} />
        <circle id="close-button-svg-circle" cx="20" cy="20" r="16" fill="transparent" />
      </svg>
    );
  }
}
