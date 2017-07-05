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
  @observable draggableBounds = {
      left: -this.imageOffset,
      right: this.imageOffset,
      top: -this.imageOffset,
      bottom: this.imageOffset
    };
  @observable imageURL = '';
  @observable globePreloader = true;

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.selectImage();
    this.selectOffset();
    this.selectPreloader();
  }

  componentWillReceiveProps(nextProps) {
    this.selectImage();
    this.selectOffset();
  }

  render() {
    if (this.props.dragOn) {
      return (
        <div className="composite-container">
          <ReactResizeDetector handleWidth onResize={this.resizeImageOffset} />
          <Draggable bounds={this.draggableBounds}>
            <Img draggable="false" src={this.imageURL}
                loader={
                  <div className="image-loader-container">
                    <img src="src/gfx/globe-loader.gif" />
                    <p>loading image...</p>
                  </div>
                }
                unloader={
                  <div className="image-loader-container-unable">
                    <img src="src/gfx/globe-loader.gif" />
                    <p>unable to load image, try to refresh or come back later, sorry, I'm just an artist :-)</p>
                  </div>
                }
            />
          </Draggable>
        </div>
      );
    } else {
      return (
        <div className="image-container">
        <ReactResizeDetector handleWidth onResize={this.resizeImageOffset} />
          <Img draggable="false"
                src={this.imageURL}
                loader={
                  <div className={this.globePreloader ? 'image-loader-container' : 'image-loader-container-square'}>
                    <img src={this.globePreloader ? 'src/gfx/globe-loader.gif' : 'src/gfx/square-loader.gif'} />
                    <p>loading image...</p>
                  </div>
                }
                unloader={
                  <div className={this.globePreloader ? 'image-loader-container-unable' : 'image-loader-container-square-unable'}>
                    <img src={this.globePreloader ? 'src/gfx/globe-loader.gif' : 'src/gfx/square-loader.gif'} />
                    <p>unable to load image, try to refresh or come back later, sorry, I'm just an artist :-)</p>
                  </div>
                }
          />
        </div>
      );
    }
  }

  @action selectImage = () => {
    this.windowWidth = window.innerWidth;
    if (this.props.view == "composite-composite") {
      if (this.windowWidth > 1646) {
        this.imageURL = this.props.imageSRC.image;
      } else if (this.windowWidth > 540) {
        this.imageURL = this.props.imageSRC.imageLarge;
      } else {
        this.imageURL = this.props.imageSRC.imageMedium;
      }

    } else if (this.props.view == "composite-magnify") {
      if (this.windowWidth > 899) {
        this.imageURL = this.props.imageSRC.image;
      } else {
        this.imageURL = this.props.imageSRC.imageLarge;
      }

    } else if (this.props.view == "composite-satellite") {
      if (this.windowWidth > 1646) {
        this.imageURL = this.props.imageSRC.complementaryImage;
      } else if (this.windowWidth > 540) {
        this.imageURL = this.props.imageSRC.complementaryImageLarge;
      } else {
        this.imageURL = this.props.imageSRC.complementaryImageMedium;
      }

    } else if (this.props.view == "composite-photo") {
      if (this.windowWidth > 1646) {
        this.imageURL = this.props.imageSRC.secondComplementaryImage;
      } else if (this.windowWidth > 540) {
        this.imageURL = this.props.imageSRC.secondComplementaryImageLarge;
      } else {
        this.imageURL = this.props.imageSRC.secondComplementaryImageMedium;
      }

    } else if (this.props.view == "satellite") {
      if (this.windowWidth > 1700) {
        this.imageURL = this.props.imageSRC.complementaryImageLarge;
      } else {
        this.imageURL = this.props.imageSRC.complementaryImageMedium;
      }

    } else if (this.props.view == "photo") {
      if (this.windowWidth > 1700) {
        this.imageURL = this.props.imageSRC.secondComplementaryImageMedium;
      } else {
        this.imageURL = this.props.imageSRC.secondComplementaryImageMedium;
      }

    } else if (this.props.view == "raw") {
      this.imageURL = this.props.imageSRC.rawImage;
    }
  }

  @action selectOffset = () => {
    if (this.windowWidth > 899 ) {
      this.imageOffset = ((1500 - (this.windowWidth * 0.62)) / 2);
      this.draggableBounds = {
        left: -this.imageOffset,
        right: this.imageOffset,
        top: -this.imageOffset,
        bottom: this.imageOffset
      };
    } else {
      this.imageOffset = ((1000 - (this.windowWidth * 0.94)) / 2);
      this.draggableBounds = {
        left: -this.imageOffset,
        right: this.imageOffset,
        top: -this.imageOffset,
        bottom: this.imageOffset
      };
    }
  }

  @action resizeImageOffset = () => {
    this.windowWidth = window.innerWidth;
    this.selectImage();
    this.selectOffset();
  }

  @action selectPreloader = () => {
    if (this.props.view == ('composite-composite' || 'composite-magnify' || 'composite-satellite' || 'composite-photo')) {
        this.globePreloader = true;
      } else {
        this.globePreloader = false;
      }
  }
}
