import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Draggable from 'react-draggable';
import Img from 'react-image';

import ReactResizeDetector from 'react-resize-detector';

@observer
export default class Image extends React.Component {
  @observable windowWidth = window.innerWidth;
  @observable imageOffset = ((1000 - (this.windowWidth * 0.92)) / 2);
  @observable newBounds = {
      left: -this.imageOffset,
      right: this.imageOffset,
      top: -this.imageOffset,
      bottom: this.imageOffset
    };
  @observable imageURL = '';

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.dragOn) {
      return (
        <div className="composite-container">
          <ReactResizeDetector handleWidth onResize={this.resizeImageOffset} />
          <Draggable bounds={this.newBounds}>
            <Img draggable="false" src={this.selectImage()} loader={<img src="src/gfx/loader.gif" />} unloader={<img src="src/gfx/loader.gif" />} />
          </Draggable>
        </div>
      );
    } else {
      return (
          <Img draggable="false" src={this.selectImage()} loader={<img src="src/gfx/loader.gif" />} unloader={<img src="src/gfx/loader.gif" />} />
      );
    }
  }

  @action selectImage = () => {
    this.imageURL = this.props.imageSRC.image;
    return this.imageURL;
  }

  @action resizeImageOffset = () => {
    this.windowWidth = window.innerWidth;
    this.imageOffset = ((1000 - (this.windowWidth * 0.92)) / 2);
    this.newBounds = {
      left: -this.imageOffset,
      right: this.imageOffset,
      top: -this.imageOffset,
      bottom: this.imageOffset
    };
  }
}
