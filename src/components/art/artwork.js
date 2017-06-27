import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class Artwork extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.artworkData.artworkState(this.props.id);
  }

  render() {
    const { artworkStateObject } = this.props.artworkData;
    return (
      <section className="artwork">
        <div className="artwork-header">
          <h1>{this.props.name}</h1>
          <h2>{this.props.contentLocation}</h2>
        </div>
        <div className="artwork-composite" onClick={this.toggleComposite}>

          {this.showComposite()}
        </div>
        <div className="artwork-extras">
          <div className="artwork-satellite">
            {this.showSatellite()}
          </div>
          <div className="artwork-photo">
            {this.tester()}
            {this.showPhoto()}
          </div>
        </div>
      </section>
    );
  }

  toggleComposite = (e) => {
    console.log(this.props.artworkData.artworkStateObject);
    this.props.artworkData.artworkStateObject.photo = !this.props.artworkData.artworkStateObject.photo;
    console.log(this.props.artworkData.artworkStateObject.photo);
    // this.props.artworkData.artworkStateObject.set("photoOn_4", true);
    // const tester = this.artworkStateArray.get(compositeOn_4);
    // console.log(tester);
  }

  tester = () => {
    if (this.props.artworkData.artworkStateObject === true) {
      return 'working';
    } else {
      return 'not working';
    }
  }

  showComposite() {
    return (
      <img src={this.props.imageMedium} />
    );
  }
  showSatellite() {
    return (
      <img src={this.props.complementaryImageMedium} />
    );
  }
  showPhoto() {
    return (
      <img src={this.props.secondComplementaryImageMedium} />
    );
  }
}
