import React from 'react';

import VisibilitySensor from 'react-visibility-sensor';
import Draggable from 'react-draggable';
import Img from 'react-image';

export default class Image extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.dragOn) {
      return (
        <div className="composite-container">
            <Draggable bounds={{left: -300, right: 300, top: -300, bottom: 300}}>
              <Img draggable="false" src={this.props.image} loader={<img src="src/gfx/loader.gif" />} unloader={<img src="src/gfx/loader.gif" />} />
            </Draggable>
        </div>
      );
    } else {
      return (
          <Img draggable="false" src={this.props.image} loader={<img src="src/gfx/loader.gif" />} unloader={<img src="src/gfx/loader.gif" />} />
      );
    }
  }
}
